// Modules
const path = require('path')
const express = require('express')
const router = express.Router()
const sgMail = require('@sendgrid/mail')

// Variables
const data = require('../data.json')
const webVariables = require('../config.json')
const sendGridEmail = process.env.EMAIL || webVariables.email.email
const sendGridAPIKey = process.env.SENDGRIDAPI || webVariables.email.sendGridAPI
sgMail.setApiKey(sendGridAPIKey)

// GET REQUESTS
// Retrieving app data
router.get('/api/data/experienceList', (req, res) => {
    res.send(data)
})

// Retrieving app data
router.get('/api/data/projectList', (req, res) => {
    res.send(data)
})

// Serving static files 
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


// Send Email from form
router.post('/api/contact-me', (req, res) => {
    let emailContent = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li> Name: ${req.body.name}</li>
      <li> Name: ${req.body.company}</li>
      <li> Name: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.description}</p>
  `

    let output = {
        to: sendGridEmail,
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: emailContent
    }

    // sgMail.send(output)

    console.log(req.body)
    res.sendStatus(200)
})

module.exports = router