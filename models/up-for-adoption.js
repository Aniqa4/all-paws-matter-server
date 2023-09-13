const mongoose = require('mongoose');

const upForAdoptionSchema = new mongoose.Schema(
    {
        animal_type: {
            type: String,
            required: true
        },
        photo_url:{
            type:String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        breed: {
            type: String,
        },
        type:{
            type:String,
            required: true
        },
        description: {
            type: String
        }
    }
)

const UpForAdoption = mongoose.model('up-for-adoption', upForAdoptionSchema)
module.exports = UpForAdoption;