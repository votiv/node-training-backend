'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
        validate: {
		    validator: (v) => {
		        return /[_'A-Za-z0-9-\\+]+(\.[_'A-Za-z0-9-\\+]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,3})/.test(v)
            },
            message: 'Invalid email!'
        }
	},
	password: {
		type: String,
		required: true
	}
})

const UserModel = module.exports = mongoose.model('User', UserSchema)