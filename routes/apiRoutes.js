// Modules
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");

// Variables
const router = express.Router();
const validateTime = require("../services/validateTime");
const emailTemplate = require("../services/templates/emailTemplate");
const keys = require("../config/keys");

// DB Models
const Contact = mongoose.model("contact");
const Experience = mongoose.model("experience");
const Projects = mongoose.model("projects");

// GET REQUESTS
// Retrieving app data
router.get("/data/experienceList", async (req, res) => {
  const experience = await Experience.find();
  try {
    res.send(experience.reverse());
  } catch (err) {
    throw err;
  }
});

// Retrieving app data
router.get("/data/projectList", async (req, res) => {
  const projects = await Projects.find();
  try {
    res.send(projects.reverse());
  } catch (err) {
    throw err;
  }
});

// POST REQUESTS
// Send Email from form
router.post("/contact-me", async (req, res) => {
  let { name, company, email, description } = req.body;
  // Return error if body values are missing
  if (!name || !company || !email || !description) {
    res.status(400);
    return;
  }
  //Initialize sendgrid
  sgMail.setApiKey(keys.sendGridAPIKey);

  // Email Object
  const msg = {
    to: keys.myEmail,
    from: email,
    subject: `${name} would like to connect with you!`,
    html: emailTemplate({
      name,
      company,
      email,
      description
    })
  };

  // Return value from the DB
  Contact.findOne({ email: email })
    .sort({
      date_added: -1
    })
    .then(contact => {
      if (contact === null) {
        // Contact Object
        let contactInformation = new Contact({
          name,
          company,
          email,
          description,
          dateSent: new Date().getTime()
        });
        // send the email
        sgMail.send(msg);
        // save email to db
        contactInformation.save();
        return res.send(contactInformation);
      } else if (
        validateTime(contact.dateSent, new Date().getTime()) === false
      ) {
        // respond with server
        throw new Error(
          "Unable to send contact form. Last request was within an hour. Try again later"
        );
      }
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
});

module.exports = router;
