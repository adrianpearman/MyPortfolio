// Modules
const path = require('path')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const sgMail = require('@sendgrid/mail')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

// Variables
const router = express.Router()
const MYEMAIL = process.env.EMAIL
const EMAIL_P = process.env.EMAIL_P

const mLabURI_USERNAME = process.env.MLABURI_USERNAME
const mLabURI_PASSWORD = process.env.MLABURI_PASSWORD
const mLabURI_CONNECTION = process.env.MLABURI_CONNECTION
const mLabURI = `mongodb://${mLabURI_USERNAME}:${mLabURI_PASSWORD}@ds143039.mlab.com:43039/${mLabURI_CONNECTION}`

// dB Connection
mongoose.Promise = global.Promise;
mongoose.connect(mLabURI, { useNewUrlParser: true })

// GET REQUESTS
// Retrieving app data
router.get('/data/experienceList', (req, res) => {
    MongoClient.connect(mLabURI, (err,db) => {
        if(err) throw err
        let database = db.db('apsp_portfolio')
        database.collection('experience').find({}).toArray((err, data) => {
            if (err) throw err
            res.send(data.reverse())
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


// POST REQUESTS
// Send Email from form
router.post('/contact-me', (req, res) => {
    let name = req.body.name
    let company = req.body.company
    let email = req.body.email
    let description = req.body.description

//     let emailContent = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li> Name: ${name}</li>
//       <li> Company: ${company}</li>
//       <li> Email: ${email}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${description}</p>
//   `

//     let mailOptions = {
//         from: "Adrian's website",
//         to: MYEMAIL,
//         subject: "A new message request from my portfolio",
//         // text: "info",
//         generateTextFromHTML: true,
//         html: emailContent
//     }

    let contactInformation = {
        name,
        company,
        email,
        description
    }

    MongoClient.connect(mLabURI, (err, db) => {
        if (err) throw err
        let database = db.db('apsp_portfolio')
        database.collection('contact').insertOne(contactInformation, (err, dbResponse) => {
            if (err) {
                throw err
            } else {
                res.sendStatus(200)
            }
        })
    })
})

module.exports = router