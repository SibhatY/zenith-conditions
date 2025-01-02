import React, { useState } from 'react';
import '../App.js';
import './WeatherForm.css';

function WeatherForm({ setWeatherData, setError }) {

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const [units, setUnits] = useState('imperial');

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setError(null);
            const queryParams = new URLSearchParams({
                city,
                state: state || undefined,
                country: country || undefined,
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



    const usStates = [
        { code: 'AL', name: 'Alabama' },
        { code: 'AK', name: 'Alaska' },
        { code: 'AZ', name: 'Arizona' },
        { code: 'AR', name: 'Arkansas' },
        { code: 'CA', name: 'California' },
        { code: 'CO', name: 'Colorado' },
        { code: 'CT', name: 'Connecticut' },
        { code: 'DE', name: 'Delaware' },
        { code: 'FL', name: 'Florida' },
        { code: 'GA', name: 'Georgia' },
        { code: 'HI', name: 'Hawaii' },
        { code: 'ID', name: 'Idaho' },
        { code: 'IL', name: 'Illinois' },
        { code: 'IN', name: 'Indiana' },
        { code: 'IA', name: 'Iowa' },
        { code: 'KS', name: 'Kansas' },
        { code: 'KY', name: 'Kentucky' },
        { code: 'LA', name: 'Louisiana' },
        { code: 'ME', name: 'Maine' },
        { code: 'MD', name: 'Maryland' },
        { code: 'MA', name: 'Massachusetts' },
        { code: 'MI', name: 'Michigan' },
        { code: 'MN', name: 'Minnesota' },
        { code: 'MS', name: 'Mississippi' },
        { code: 'MO', name: 'Missouri' },
        { code: 'MT', name: 'Montana' },
        { code: 'NE', name: 'Nebraska' },
        { code: 'NV', name: 'Nevada' },
        { code: 'NH', name: 'New Hampshire' },
        { code: 'NJ', name: 'New Jersey' },
        { code: 'NM', name: 'New Mexico' },
        { code: 'NY', name: 'New York' },
        { code: 'NC', name: 'North Carolina' },
        { code: 'ND', name: 'North Dakota' },
        { code: 'OH', name: 'Ohio' },
        { code: 'OK', name: 'Oklahoma' },
        { code: 'OR', name: 'Oregon' },
        { code: 'PA', name: 'Pennsylvania' },
        { code: 'RI', name: 'Rhode Island' },
        { code: 'SC', name: 'South Carolina' },
        { code: 'SD', name: 'South Dakota' },
        { code: 'TN', name: 'Tennessee' },
        { code: 'TX', name: 'Texas' },
        { code: 'UT', name: 'Utah' },
        { code: 'VT', name: 'Vermont' },
        { code: 'VA', name: 'Virginia' },
        { code: 'WA', name: 'Washington' },
        { code: 'WV', name: 'West Virginia' },
        { code: 'WI', name: 'Wisconsin' },
        { code: 'WY', name: 'Wyoming' },
    ];

    return (
        <form className='weather-form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <input
                    type="text"
                    className='form-input'
                    placeholder="Enter city (e.g., Dallas)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <input
                    type="text"
                    className='form-input'
                    placeholder="Enter country (optional)"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>

            {country === 'US' && (
                <div className='form-group'>
                    <select className='form-select' value={state} onChange={(e) => setState(e.target.value)}>
                        <option value="">Select state</option>
                        {usStates.map((state) => (
                            <option key={state.code} value={state.code}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
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
