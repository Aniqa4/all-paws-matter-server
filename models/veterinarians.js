const mongoose = require('mongoose');

const veterinarianSchema = new mongoose.Schema(
    {
        vetName: {
            type: String,
            required: true
        },
        photo_url: {
            type: String,
            required: true
        },
        specialty: {
            type: String,
            required: true
        },
        years_of_experience: {
            type: String,
        },
        type: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required:true
        }
    }
)

const Veterinarians = mongoose.model('veterinarians', veterinarianSchema)
module.exports = Veterinarians;