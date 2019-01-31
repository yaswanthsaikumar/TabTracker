console.log('hello')
const express= require('express')
const bodyparser= require('body-parser')
const cors= require('cors')
const morgan= require('morgan')

const app=express()
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())
app.get('/status',(req,res) => {
    res.send({
        message:"Hello World yash"
    })
})
app.listen(process.env.PORT || 8081)