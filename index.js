const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;

//malwares
app.use(cors());
app.use(express.json());

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

//connecting to mongodb
mongoose
    .connect(`mongodb+srv://${process.env.user_name}:${process.env.password}@cluster0.3kab2ba.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>console.log('MongoDB Connected'))
    .catch((err)=>console.log("Mongo Error",err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})