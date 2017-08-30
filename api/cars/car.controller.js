'use strict'

const mongoose = require('mongoose')
const Car = mongoose.model('Car')


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
    
    let newCar = new Car(req.body)
    
    newCar.save((error, car) => {
        
        if (error) {
            res.status(400).send(error)
        }
        
        res.status(200).json(car)
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