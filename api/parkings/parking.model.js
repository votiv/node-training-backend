'use strict'

let mongoose = require('mongoose'),
    Schema = mongoose.Schema

let ParkingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coordinates: {
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        }
    },
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }]
    
})

module.exports = mongoose.model('Parking', ParkingSchema)