'use strict'

let mongoose = require('mongoose'),
	Car = mongoose.model('Car')


/**
 * Retrieve all cars
 * @param req
 * @param res
 */
exports.getCars = (req, res) => {

	Car.find({}, (error, cars) => {
	
		if (error) {
			res.send(error)
		}
		
		res.json(cars)
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
			res.send(error)
		}
		
		res.json(car)
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
			res.send(error)
		}
		
		res.json(car)
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
			res.send(error)
		}
		
		res.json(car)
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
			res.send(error)
		}
		
		res.json({ message: 'Car successfully removed' })
	})
}