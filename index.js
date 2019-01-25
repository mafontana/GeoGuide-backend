const express = require('express');
const port = process.env.PORT || 4010
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/geoguide')

mongoose.Promise = global.Promise

app.use(bodyParser.json())

const routes = require('./routes/api')

app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message})
})

app.use(routes)


app.listen(port, () => console.log(`listening on port ${port}`))