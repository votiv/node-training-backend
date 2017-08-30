'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema = new Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    }
})

const BookingsModel = module.exports = mongoose.model('Booking', BookingSchema)