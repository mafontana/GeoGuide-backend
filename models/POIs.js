const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create geolocation Schema

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

const POIschema = new Schema({
    name: {
        type: String
    },
    geometry: GeoSchema
    
})

const POI = mongoose.model('POI', POIschema)

module.exports = POI