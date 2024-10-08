require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const reviewRoutes = require('./routes/reviews')

//express app
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()   
})

//routes
app.use('/api/reviews', reviewRoutes) //method from diff file

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {console.log(error)})


