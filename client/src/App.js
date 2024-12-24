import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForm from './components/WeatherForm';
import React, { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (

    <div className="App">

      <h1>Zenith Conditions</h1>

      <WeatherForm setWeatherData={setWeatherData} />
      {weatherData && <WeatherDisplay data={weatherData} />}
      
    </div>
  );
}

export default App;
