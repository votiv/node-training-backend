'use strict'

const R = require('ramda')
const mongoose = require('mongoose')
const Car = mongoose.model('Car')
const Booking = mongoose.model('Booking')


/**
 * Retrieve all cars
 * @param req
 * @param res
 */
exports.getCars = (req, res) => {
    
    Car.find({}, (error, cars) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).json(cars)
    })
}


/**
 * Create a car
 * @param req
 * @param res
 */
exports.createCar = (req, res) => {
    
    const newCar = new Car(req.body)
    const bookingsLength = newCar.bookings.length
    
    Booking.find({ '_id': { $in: newCar.bookings } }, (error, bookings) => {
        
        console.log('this was found', bookings)
        
        if (error) {
            return res.status(400).send(error)
        }
        
        
        if (bookings && bookings.length === bookingsLength) {
            
            newCar.save((error, car) => {
                
                if (error) {
                    return res.status(400).send(error)
                }
                
                return res.status(200).json(car)
            })
        } else {
            
            const isNotABooking = newCar.bookings.filter((element) => { return bookings.indexOf(element) < 0 })
            const errorMessage = 'Not a valid booking Id: ' + isNotABooking
            
            return res.status(400).send(errorMessage)
        }
    })
}


/**
 * Get one car by ID
 * @param req
 * @param res
 */
exports.getCarById = (req, res) => {
    
    Car.findById(req.params.carId, (error, car) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).json(car)
    })
}


/**
 * Update car identified by it's ID
 * @param req
 * @param res
 */
exports.updateCar = (req, res) => {
    
    const query = { _id: req.params.carId },
        car = req.body,
        options = { new: true }
    
    Car.findOneAndUpdate(query, car, options, (error, car) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).json(car)
    })
}


/**
 * Delete car identified by it's ID
 * @param req
 * @param res
 */
exports.deleteCar = (req, res) => {
    
    const query = { _id: req.params.carId }
    
    Car.remove(query, (error, car) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).json({ message: 'Car successfully removed' })
    })
}

exports.getBookingsFromCar = (req, res) => {
    
    Car.findOne({ _id: req.params.carId })
        .populate('bookings')
        .exec((error, car) => {
            
            if (error) {
                return res.status(400).send(error)
            }
            
            return res.status(200).send(car.bookings)
        })
}