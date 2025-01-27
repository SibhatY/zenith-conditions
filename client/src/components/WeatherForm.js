import React, { useState } from 'react';
import Select from 'react-select';
import '../App.js';
import './WeatherForm.css';

function WeatherForm({ setWeatherData, setError }) {

    const [cityOptions, setCityOptions] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [units, setUnits] = useState('imperial');



    const fetchCitySuggestions = async (input) => {

        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);

            const data = await response.json();

            const options = data.map((city) => ({

                label: `${city.name}, ${city.state || ''} (${city.country})`,
                value: city,
            }));
            setCityOptions(options);
        } catch (error) {
            console.error('Error fetching city suggestions', error);
        }
    };


    const handleCityInputChange = (input) => {

        if (input.length >= 4) {
            fetchCitySuggestions(input);
        }
        else {
            setCityOptions([]);
        }
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!selectedCity) {
            setError('Please select a city from the dropdown. ');
            return;
        }

        try {
            const { value: city } = selectedCity;
            setError(null);
            const queryParams = new URLSearchParams({
                city: city.name,
                state: city.state || undefined,
                country: city.country || undefined,
                units,
            });

            const response = await fetch(`/api/weather?${queryParams.toString()}`);

            if (!response.ok) {
                throw new Error('Location not found. Please check your input!');
            }

            const data = await response.json();

            setWeatherData(data);

        } catch (error) {

            console.error('Error fetching weather data:', error);
            setWeatherData(null);
            setError(error.message);
        }
    };




    const customSelectStyles = {
        control: (base) => ({
            ...base,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(224, 220, 220, 0.5)',
            color: '#fff',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#ffc857',
            },
            transition: 'border-color 0.3s ease',
        }),
        singleValue: (base) => ({
            ...base,
            color: '#fff',
        }),
        input: (base) => ({
            ...base,
            color: '#fff',
        }),
        placeholder: (base) => ({
            ...base,
            color: 'rgba(255, 255, 255, 0.7)',
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#1a1a40',
            color: '#fff',
        }),
        option: (base, state) => ({
            ...base,
            color: state.isFocused ? '#000' : '#fff',
            transition: 'background-color 0.2s ease, color 0.2s ease',
        }),
    };


    return (
        <form className='weather-form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <Select
                    options={cityOptions}
                    onInputChange={handleCityInputChange}
                    onChange={setSelectedCity}
                    placeholder="Enter city name"
                    styles={customSelectStyles}

                />
            </div>
            <div className='form-group'>
                <select className='form-select' value={units} onChange={(e) => setUnits(e.target.value)}>
                    <option value="imperial">Fahrenheit</option>
                    <option value="metric">Celsius</option>
                </select>
            </div>
            <button className='form-button' type="submit">Get Weather</button>
        </form>
    );
}

export default WeatherForm;
