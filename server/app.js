const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const weatherRoutes = require('./routes/weatherRoutes');
const app = express();

app.use(helmet({

    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            connectSrc: ["'self'", "https://api.openweathermap.org", "http://api.openweathermap.org"],
            imgSrc: ["'self'", "https://www.transparenttextures.com", "data:", "https://openweathermap.org"]
        }
    }
}));


app.use(express.static(path.join(__dirname, '..', 'client', 'build')));


app.set('trust proxy', 1);

const apiLimiter = rateLimit({

    windowMs: 15*60*1000,
    max: 100,
    message: 'Too many requests, please try again after a short time.'
});

app.use('/api/weather', apiLimiter, weatherRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
