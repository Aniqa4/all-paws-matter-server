const express = require('express');
const Services = require('../models/services');
const router=express.Router();

//get all data
router.get('/', async (req, res) => {
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

module.exports= router;