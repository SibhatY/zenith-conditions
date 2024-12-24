import React, { useState } from 'react';

function WeatherForm({ setWeatherData }) {

    const [city, setCity] = useState('');

    const [units, setUnits] = useState('imperial');

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(`/api/weather?city=${city}&units=${units}`);

            const data = await response.json();

            setWeatherData(data);

        } catch (error) {
            
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
            />
            <select value={units} onChange={(e) => setUnits(e.target.value)}>
                <option value="imperial">Fahrenheit</option>
                <option value="metric">Celsius</option>
            </select>
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default WeatherForm;
