'use strict'

module.exports = (app) => {
    
    const carCtrl = require('./car.controller')
    
    app.route('/cars')
        .get(carCtrl.getCars)
        .post(carCtrl.createCar)
    
    app.route('/cars/:carId')
        .get(carCtrl.getCarById)
        .put(carCtrl.updateCar)
        .delete(carCtrl.deleteCar)
    
    app.route('/cars/:carId/bookings')
        .get(carCtrl.getBookingsFromCar)
}