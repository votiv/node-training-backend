'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const nodeCache = require('node-cache')
const sessionCache = new nodeCache()


/**
 * Create user
 * @param req
 * @param res
 */
exports.createUser = (req, res) => {

	const newUser = new User(req.body)
	
	User.findOne({ email: newUser.email }, 'email', (error, user) => {
		
		// if the user exists already don't do anything
		if (!!user) {

			return res.status(400).send('user already exists')
		} else {
			// else hash the password and save the user
			
			const salt = bcrypt.genSaltSync(7)
			newUser.password = bcrypt.hashSync(newUser.password, salt).toString()
			
			newUser.save((error, user) => {
                
                if (error) {
					return res.status(401).send(error)
				}
				
				return res.status(200).send(newUser)
			})
		}
	})
}

exports.loginUser = (req, res) => {
	
	const newUser = new User(req.body)
	
	User.findOne({ email: newUser.email }, 'password', (error, user) => {
		
		if (error) {
			return res.send('user not in db', error)
		}
		
		// compare the users password with the one in db
		if (bcrypt.compareSync(newUser.password, user.password)) {
			
			// TODO: create session for user
            // sessionCache.set(newUser.password, '')
            
            return res.status(200).send('user successfully logged in')
		} else {
			// passwords didn't match
			return res.status(401).send('Bad credentials')
		}
	})
}

exports.logout = (req, res) => {

	// TODO: clear users session
}
