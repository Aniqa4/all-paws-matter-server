const express = require('express')
const cors = require('cors');
const  mongoose  = require('mongoose');
require('dotenv').config();
const servicesRouter= require('./routes/services')

const app = express()
const port = process.env.PORT || 5000;

//malwares
app.use(cors());
app.use(express.json());


//connecting to mongodb
mongoose
    .connect(`mongodb+srv://${process.env.user_name}:${process.env.password}@cluster0.3kab2ba.mongodb.net/services?retryWrites=true&w=majority`)
    .then(()=>console.log('MongoDB Connected'))
    .catch((err)=>console.log("Mongo Error",err))

app.use("/services",servicesRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
