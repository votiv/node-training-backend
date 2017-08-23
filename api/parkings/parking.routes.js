'use strict'

module.exports = (app) => {
	
	let parkingCtrl = require('./parking.controller')
	
	app.route('/parking')
	   .get(parkingCtrl.getParkings)
	   .post(parkingCtrl.createParking)
	
	app.route('/parking/:parkingId')
	   .get(parkingCtrl.getParkingById)
	   .put(parkingCtrl.updateParking)
	   .delete(parkingCtrl.deleteParking)
}