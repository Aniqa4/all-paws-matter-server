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
    .connect(`mongodb+srv://${process.env.user_name}:${process.env.password}@cluster0.3kab2ba.mongodb.net/services?retryWrites=true&w=majority`)
    .then(()=>console.log('MongoDB Connected'))
    .catch((err)=>console.log("Mongo Error",err))

//get all data
app.get('/services', async (req, res) => {
    try {
      // Use the Services model to fetch data from the "services" collection
      const services = await Services.find();
  
      // Send the retrieved data as a JSON response
      res.json(services);
    } catch (error) {
      // Handle any errors that occur during the database query
      console.error('Error fetching services:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });  


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})