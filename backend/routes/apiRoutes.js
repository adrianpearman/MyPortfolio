// Modules
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
const Project = mongoose.model("project");
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
  const projects = await Project.find({});
  try {
    res.send(projects.reverse());
  } catch (err) {
    throw err;
  }
});
// POST REQUESTS
// // add new project to db
// router.post("/data/projectList", async (req, res) => {
//   let newProject = new Project({ ...req.body }).save();

//   await newProject;
//   try {
//     res.send({ msg: `Successfully added ${req.body.title} to the database` });
//   } catch (error) {
//     throw error;
//   }
// });
// // add new experience to db
// router.post("/data/experienceList", async (req, res) => {
//   let newExperience = new Experience({
//     ...req.body,
//   }).save();

//   await newExperience;
//   try {
//     res.send({
//       msg: `Successfully added ${req.body.title} at ${req.body.employer}, to the database`,
//     });
//   } catch (error) {
//     throw error;
//   }
// });
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
      description,
    }),
  };
  try {
    // Return value from the DB
    let contact = await Contact.findOne({ email: email }).sort({
      date_added: -1,
    });

    if (contact === null) {
      // Contact Object
      let contactInformation = new Contact({
        name,
        company,
        email,
        description,
        dateSent: new Date().getTime(),
      });
      // send the email
      sgMail.send(msg);
      // save email to db
      contactInformation.save();
      return res.send(contactInformation);
    } else if (validateTime(contact.dateSent, new Date().getTime()) === false) {
      // respond with server
      throw new Error(
        "Unable to send contact form. Last request was within an hour. Try again later"
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

module.exports = router;
