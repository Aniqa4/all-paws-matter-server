const express = require('express')
const cors = require('cors');
require('dotenv').config();

const {connectMongoDB}= require('./connection')
const servicesRouter= require('./routes/services')
const upForAdoptionRouter= require('./routes/up-for-adoption')
const rescuedAnimalsRouter= require('./routes/rescued-animals')
const veterinariansRouter= require('./routes/veterinarians')

const app = express()
const port = process.env.PORT || 5000;

//malwares
app.use(cors());
app.use(express.json());


//connecting to mongodb
connectMongoDB(`mongodb+srv://${process.env.user_name}:${process.env.password}@cluster0.3kab2ba.mongodb.net/services?retryWrites=true&w=majority`)


app.use("/services",servicesRouter)
app.use("/up-for-adoption",upForAdoptionRouter)
app.use("/rescued-animals",rescuedAnimalsRouter)
app.use("/veterinarians",veterinariansRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
