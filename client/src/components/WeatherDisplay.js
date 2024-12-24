import React from 'react';

function WeatherDisplay({ data }) {
    const { name, main, weather, wind } = data;

    return (
        <div className="weather-display">
            <h2>Weather in {name}</h2>
            <p>Temperature: {main.temp}°</p>
            <p>Condition: {weather[0].description}</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} mph</p>
        </div>
    );
}

export default WeatherDisplay;
