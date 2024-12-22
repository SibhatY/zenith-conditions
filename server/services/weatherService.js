const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const getWeather = async ({ city, state, country, units, lang }) => {
    let query = city;
    if (state) query += `,${state}`;
    if (country) query += `,${country}`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=${units}&lang=${lang}`;
    const response = await axios.get(url);
    return response.data;
};

module.exports = { getWeather };
