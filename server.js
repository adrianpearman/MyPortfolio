// Modules
const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Environment Variables
const PORT = process.env.port || 3001
const app = express()

// Express Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.get('/', (req, res) => {
//     res.send('YOOOO')
// })

// Routes
const apiRoutes = require('./routes/apiRoutes')
app.use(apiRoutes)

// Server Startup
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})