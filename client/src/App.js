import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForm from './components/WeatherForm';
import React, { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  return (

    <div className="App">

      <h1>Zenith Conditions</h1>

      <WeatherForm setWeatherData={setWeatherData} setError={setError} />
      {error && <p className='error-message'>{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
      
    </div>
  );
}

export default App;
