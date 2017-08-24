'use strict'

// Dependencies
const express = require('express')
const router = express.Router()

const carRoutes = require('./api/cars/car.routes')
const parkingRoutes = require('./api/parkings/parking.routes')
const bookingRoutes = require('./api/bookings/booking.routes')
const userRoutes = require('./api/user/user.routes')

const Car = require('./api/cars/car.model')
const Parking = require('./api/parkings/parking.model')
const Booking = require('./api/bookings/booking.model')
const User = require('./api/user/user.model')


carRoutes(router)
parkingRoutes(router)
bookingRoutes(router)
userRoutes(router)


// Return router
module.exports = router