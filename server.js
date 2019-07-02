// 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

// Modules
const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Environment Variables
const PORT = process.env.PORT || 3001
const app = express()

// Express Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client', 'build')))

// Routes
const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

// Server Startup
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})