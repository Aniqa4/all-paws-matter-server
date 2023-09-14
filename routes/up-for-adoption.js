const express = require('express');
const UpForAdoption = require('../models/up-for-adoption');
const router=express.Router();

//get all data
router.get('/', async (req, res) => {
    try {
      // Use the Services model to fetch data from the "services" collection
      const upForAdoption = await UpForAdoption.find();
      // Send the retrieved data as a JSON response
      res.json(upForAdoption);
    } catch (error) {
      // Handle any errors that occur during the database query
      console.error('Error fetching services:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });  

  router.post("/", async (req, res) => {
    try {
      const newData = req.body;
      const newAnimal = new UpForAdoption(newData);
      const result = await newAnimal.save();
      res.json(result);
    } catch (error) {
      console.error('Error creating new data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

module.exports= router;
