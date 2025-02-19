import React, {useState} from 'react';
import './WeatherDisplay.css';
import { getWeatherAdvice } from './weatherAdvice';

function WeatherDisplay({ data }) {
    const { name, main, weather, wind } = data;
    const [flipped, setFlipped] = useState(false);

    const {activity, clothing} = getWeatherAdvice(weather[0].main, main.temp, wind.speed);

    return (

        <div
         className={`weather-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}
         >
            <div className='weather-card-inner'>
        <div className='weather-card-front'>
            <h2>{name}</h2>
            <div className='weather-info'>
                <div className='weather-condition'>
                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description} />

                    <p>{weather[0].main}</p>
                </div>
                <div className='weather-stats'>

                    <p><strong>Temperature:</strong> {main.temp}°</p>
                    <p><strong>Condition:</strong> {weather[0].description}</p>
                    <p><strong>Humidity:</strong> {main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {wind.speed} mph</p>
                </div>
            </div>
            <p className='flip-hint'>Flip for more! ↻</p>
        </div>
        

        <div className='weather-card-back'>
            <h3>Suggestions for You</h3>
            <p><strong>Activity:</strong> {activity}</p>
            <p><strong>What to Wear:</strong> {clothing}</p>
            <p className='flip-hint'>Click to flip back</p>
        </div>
        </div>
        </div>
    );
}

export default WeatherDisplay;
