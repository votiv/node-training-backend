'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema

const CarSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    mark: {
        type: String,
        required: true
    },
    parking: {
        type: Schema.Types.ObjectId,
        ref: 'Parking'
    },
    bookings: [{
        type: Schema.Types.ObjectId,
        ref: 'Booking'
    }],
    creation_date: {
        type: Date,
        default: Date.now()
    }
})

const CarModel = module.exports = mongoose.model('Car', CarSchema)