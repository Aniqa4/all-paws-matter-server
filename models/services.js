const  mongoose  = require('mongoose');

//schema
const servicesSchema= new mongoose.Schema(
    {
        service_name:{
            type: String
        },
        description:{
            type:String
        }
    }
)

const Services=mongoose.model('services',servicesSchema)
module.exports = Services;