const express = require('express');
const RescuedAnimals = require('../models/rescued-animals');
const router=express.Router();

//get all data
router.get('/', async (req, res) => {
    try {
      const rescuedAnimals = await RescuedAnimals.find();
      res.json(rescuedAnimals);
    } catch (error) {
      console.error('Error fetching services:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });  

  router.post("/", async (req, res) => {
    try {
      const newData = req.body;
      const newAnimal = new RescuedAnimals(newData);
      const result = await newAnimal.save();
      res.json(result);
    } catch (error) {
      console.error('Error creating new data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

module.exports= router;