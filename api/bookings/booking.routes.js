'use strict'

module.exports = (app) => {

	const bookingCtrl = require('./booking.controller')
	
	app.route('/booking')
		.get(bookingCtrl.getBookings)
		.post(bookingCtrl.createBooking)
	
	app.route('/booking/:bookingId')
		.get(bookingCtrl.getBookingById)
		.put(bookingCtrl.updateBooking)
		.delete(bookingCtrl.deleteBooking)
}