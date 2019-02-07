module.exports = (app) => {
    app.post('/Register',(req,res) => {
          res.send({
              message:'hello ${req.body.email}! your user was registerd! Have fun'
          })
      })
  }
