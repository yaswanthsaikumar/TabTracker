const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/Register',
      AuthenticationController.register)
  }
