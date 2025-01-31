import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForm from './components/WeatherForm';
import Login from './components/Login';
import React, { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {

    setIsLoggedIn(true);
  };

  return (

    <div className="App">

      <h1>Aether Nova</h1>
      <p className='subtitle'> May the heavens guide your journey.</p>

      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <WeatherForm setWeatherData={setWeatherData} setError={setError} />
          {error && <p className='error-message'>{error}</p>}
          {weatherData && <WeatherDisplay data={weatherData} />}
        </>
      )}
    </div>
  );
}

export default App;
