const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        // array number
        type: [Number],
        createIndexes: "2dsphere"
    }
})

// Create Schema
const YzSchema = new Schema({
    name:{
        type: String,
        required: 'Name field is required'
    },
    rank:{
        type: String,
        required: 'rank is required'
    },
    available: {
        type: Boolean,
        default:false
    },
    // add in geo location || pass GeoSchema into this Schema
    geometry: GeoSchema
});

const Yz = mongoose.model("yz", YzSchema);

module.exports = Yz;