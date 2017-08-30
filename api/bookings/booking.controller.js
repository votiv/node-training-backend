'use strict'

const mongoose = require('mongoose')
const Booking = mongoose.model('Booking')


/**
 * Retrieve all bookings
 * @param req
 * @param res
 */
exports.getBookings = (req, res) => {
    
    Booking.find({}, (error, bookings) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).send(bookings)
    })
}

/**
 * Create a booking
 * @param req
 * @param res
 */
exports.createBooking = (req, res) => {
    
    const newBooking = new Booking(req.body)
    
    newBooking.save((error, booking) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).send(booking)
    })
}

/**
 * Get one booking by ID
 * @param req
 * @param res
 */
exports.getBookingById = (req, res) => {
    
    Booking.findById(req.params.bookingId, (error, booking) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).send(booking)
    })
}

/**
 * Update booking identified by it's ID
 * @param req
 * @param res
 */
exports.updateBooking = (req, res) => {
    
    const query = { _id: req.params.bookingId }
    const booking = req.body
    const options = { new: true }
    
    Booking.findOneAndUpdate(query, booking, options, (error, booking) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).send(booking)
    })
}

/**
 * Delete booking identified by it's ID
 * @param req
 * @param res
 */
exports.deleteBooking = (req, res) => {
    
    const query = { _id: req.params.bookingId }
    
    Booking.remove(query, (error, booking) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).send({ message: 'Booking successfully removed' })
    })
}