'use strict'

module.exports = (app) => {
    
    const userCtrl = require('./user.controller')
    
    app.route('/user')
        .post(userCtrl.createUser)
    
    app.route('/user/login')
        .post(userCtrl.loginUser)
    
    app.route('user/logout')
        .get(userCtrl.logout)
}
