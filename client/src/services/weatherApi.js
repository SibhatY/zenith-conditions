
export const fetchWeather = async (city, units) => {

    const response = await fetch(`/api/weather?city=${city}&units=${units}`);

    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
};
