import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ data }) {
    const { name, main, weather, wind } = data;

    return (


        <div className='weather-card'>
            <h2>{name}</h2>
            <div className='weather-info'>
                <div className='weather-condition'>
                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description} />

                    <p>{weather[0].description}</p>
                </div>
                <div className='weather-stats'>

                    <p><strong>Temperature:</strong> {main.temp}°</p>
                    <p><strong>Condition:</strong> {weather[0].description}</p>
                    <p><strong>Humidity:</strong> {main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {wind.speed} mph</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherDisplay;
