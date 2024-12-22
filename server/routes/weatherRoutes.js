const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

router.get('/', async (req, res) => {
    
    try {

        const { city, state, country, units, lang } = req.query;

        const weatherData = await weatherService.getWeather({ city, state, country, units, lang });

        res.json(weatherData);

    } catch (error) {

        console.error('Error fetching weather data:', error);

        res.status(500).json({ message: 'Error fetching weather data', details: error.message });
    }
});

module.exports = router;
