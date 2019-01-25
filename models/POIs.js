const mongoose = require('mongoose')
const Schema = mongoose.Schema

const POIschema = new Schema({
    name: {
        type: String
    }
    // add in geo location
})

const POI = mongoose.model('POI', POIschema)

module.exports = POI