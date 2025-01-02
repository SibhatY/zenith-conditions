
export const fetchWeather = async (city, state = '', country = '', units = 'imperial') => {

    const queryParams = new URLSearchParams({
        city,
        state: state || undefined,
        country: country || undefined,
        units,
    });

    const response = await fetch(`/api/weather?city=${queryParams.toString()}`);

    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
};
