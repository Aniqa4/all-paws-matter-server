const mongoose = require('mongoose');

const rescuedAnimalSchema = new mongoose.Schema(
    {
        animal_type: {
            type: String,
            required: true
        },
        photo_url: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        breed: {
            type: String,
        },
        type: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
        },
        description: {
            type: String
        }
    }
)

const RescuedAnimals = mongoose.model('rescued-animals', rescuedAnimalSchema)
module.exports = RescuedAnimals;