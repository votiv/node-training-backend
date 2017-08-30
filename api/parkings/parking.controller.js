'use strict'

let mongoose = require('mongoose'),
    Parking = mongoose.model('Parking')

/**
 * Get all parkings
 * @param req
 * @param res
 */
exports.getParkings = (req, res) => {
    
    Parking.find((error, parkings) => {
        
        if (error) {
            res.send(error)
        }
        
        res.json(parkings)
    })
}

/**
 * Create new parking
 * @param req
 * @param res
 */
exports.createParking = (req, res) => {
    
    let newParking = new Parking(req.body)
    
    newParking.save((error, parking) => {
        
        if (error) {
            res.send(error)
        }
        
        res.json(parking)
    })
}

/**
 * Get one parking by ID
 * @param req
 * @param res
 */
exports.getParkingById = (req, res) => {
    
    Parking.findById(req.params.parkingId, (error, parking) => {
        
        if (error) {
            res.send(error)
        }
        
        res.json(parking)
    })
}

/**
 * Update parking identified by it's ID
 * @param req
 * @param res
 */
exports.updateParking = (req, res) => {
    
    let query = { _id: req.params.parkingId },
        parking = req.body,
        options = { new: true }
    
    Parking.findOneAndUpdate(query, parking, options, (error, parking) => {
        
        if (error) {
            res.send(error)
        }
        
        res.json(parking)
    })
}

/**
 * Delete parking identified by it's ID
 * @param req
 * @param res
 */
exports.deleteParking = (req, res) => {
    
    let query = { _id: req.params.parkingId }
    
    Parking.remove(query, (error, parking) => {
        
        if (error) {
            res.send(error)
        }
        
        res.json({ message: 'Parking successfully removed' })
    })
}

/**
 * Get all cars from parking identified by it's ID
 * @param req
 * @param res
 */
exports.getCarsFromParking = (req, res) => {
    
    Parking.findOne({ _id: req.params.parkingId })
        .populate('cars')
        .exec((error, parking) => {
            
            if (error) {
                return res.send(error)
            }
            
            res.status(200).send(parking.cars)
        })
}