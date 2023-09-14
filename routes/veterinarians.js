const express = require('express');
const Veterinarians = require('../models/veterinarians');
const router=express.Router();

//get all data
router.get('/', async (req, res) => {
    try {
      const veterinarians = await Veterinarians.find();
      res.json(veterinarians);
    } catch (error) {
      console.error('Error fetching services:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });  

  router.post("/", async (req, res) => {
    try {
      const newData = req.body;
      const newVet = new Veterinarians(newData);
      const result = await newVet.save();
      res.json(result);
    } catch (error) {
      console.error('Error creating new data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

module.exports= router;