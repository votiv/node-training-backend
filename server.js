'use strict'

const express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	
	carRoutes = require('./api/cars/car.routes'),
	parkingRoutes = require('./api/parkings/parking.routes'),
	bookingRoutes = require('./api/bookings/booking.routes'),
	userRoutes = require('./api/user/user.routes'),
	
	Car = require('./api/cars/car.model'),
	Parking = require('./api/parkings/parking.model'),
	Booking = require('./api/bookings/booking.model'),
	User = require('./api/user/user.model')


mongoose.connect('mongodb://localhost/carDb')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// cors
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "X-Requested-With")
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	next()
})


//routing
carRoutes(app)
parkingRoutes(app)
bookingRoutes(app)
userRoutes(app)


app.listen(port)
console.log('server running on port ' + port)