const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/polling')

//geolocation Schema

const geologic_formation_schema = new Schema({
   formation_1: {
    name: String,
    age_mya: Number,
    geologic_age: String,
    description: String
   },
   formation_2: {
    name: String,
    age_mya: Number,
    geologic_age: String,
    description: String
   },
   formation_3: {
    name: String,
    age_mya: Number,
    geologic_age: String,
    description: String
   }
})

const AR_scene_coordinate_schema = new Schema({
    type: {
        type: String,
        default: "MultiPoint"
    },
    coordinates_AR_scene1: {
        type: [Number],
        index: "2dsphere"
    }, 
    coordinates_AR_scene2: {
        type: [Number],
        index: "2dsphere"
    },
    coordinates_AR_scene3: {
        type: [Number],
        index: "2dsphere"
    }, 
    coordinates_AR_scene4: {
        type: [Number],
        index: "2dsphere"
    },
    coordinates_AR_scene5: {
        type: [Number],
        index: "2dsphere"
    }, 
    coordinates_AR_scene6: {
        type: [Number],
        index: "2dsphere"
    },
    coordinates_AR_scene7: {
        type: [Number],
        index: "2dsphere"
    },
    coordinates_AR_scene8: {
        type: [Number],
        index: "2dsphere"
    },
    coordinates_AR_scene9: {
        type: [Number],
        index: "2dsphere"
    },
    coordinates_AR_scene10: {
        type: [Number],
        index: "2dsphere"
    },
})



const POIschema = new Schema({
    name: {
        type: String
    }, 
    AR_scenes: AR_scene_coordinate_schema,
    geologic_formations: geologic_formation_schema, 
})

const POI = mongoose.model('POI', POIschema)

module.exports = POI