// Modules
const path = require('path')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const sgMail = require('@sendgrid/mail')

// Variables
const router = express.Router()
const sendGridEmail = process.env.EMAIL
const mLabURI_USERNAME = process.env.MLABURI_USERNAME
const mLabURI_PASSWORD = process.env.MLABURI_PASSWORD
const mLabURI_CONNECTION = process.env.MLABURI_CONNECTION
const mLabURI = `mongodb://${mLabURI_USERNAME}:${mLabURI_PASSWORD}@ds143039.mlab.com:43039/${mLabURI_CONNECTION}`
const sendGridAPIKey = process.env.SENDGRIDAPI
// sgMail.setApiKey(sendGridAPIKey)


// dB Connection
mongoose.Promise = global.Promise;
mongoose.connect(mLabURI)

// GET REQUESTS
// Retrieving app data
router.get('/data/experienceList', (req, res) => {
    MongoClient.connect(mLabURI, (err,db) => {
        if(err) throw err
        let database = db.db('apsp_portfolio')
        database.collection('experience').find({}).toArray((err, data) => {
            if (err) throw err
            res.send(data)
            db.close()
        })
    })
})

// Retrieving app data
router.get('/data/projectList', (req, res) => {
    MongoClient.connect(mLabURI, (err, db) => {
        if (err) throw err
        let database = db.db('apsp_portfolio')
        database.collection('projects').find({}).toArray((err, data) => {
            if(err) throw err
            res.send(data)
            db.close()
        })
    })
})

// Serving static files 
// router.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })


// POST REQUESTS
// Send Email from form
router.post('/contact-me', (req, res) => {
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