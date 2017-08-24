'use strict'

// Dependencies
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// MongoDB
mongoose.connect('mongodb://localhost/carDb')


// Express
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Cors
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})


// Routes
app.use('/', require('./router'))


// Server
app.listen(port)
console.log('server running on port ' + port)