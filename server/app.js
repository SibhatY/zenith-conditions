const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const weatherRoutes = require('./routes/weatherRoutes');
const app = express();

app.use(helmet());
app.use(express.static('public'));
app.set('trust proxy', 1);

const apiLimiter = rateLimit({

    windowMs: 15*60*1000,
    max: 100,
    message: 'Too many requests, please try again after a short time.'
});

app.use('/api/weather', apiLimiter, weatherRoutes);

module.exports = app;
