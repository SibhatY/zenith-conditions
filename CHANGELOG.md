# Changelog
All notable changes to the "Zenith Conditions" project will be documented in this file.

## [Unreleased]

## [0.1.0] - 2024-12-21
### Added
- **Frontend**
  - Initialized React application using `create-react-app` in the `client` directory.
- **Backend**
  - Set up a Node.js environment with Express in the `server` directory. This includes basic server setup with `app.js` and `index.js` to handle initial server responses.
  - Created `weatherService.js` to handle logic for fetching weather data from the OpenWeatherMap API, separating this from route handling.
  - Created `weatherRoutes.js` to define the API endpoints for weather data retrieval, including routes that accept city, state, and country parameters for enhanced weather search capabilities.
  - Added `.env` configuration for secure API key management.

### Security
- Implemented environmental variables to store and access the OpenWeatherMap API key to prevent exposure in the codebase.



## [0.2.0] - 2024-12-23
### Added
- **Frontend**
  - `WeatherDisplay.js`: Displays the weather of the given valid city. As of now, it is a static display of text that gives the temperature, condition, humidity, and wind speed.
  - `WeatherForm.js`: A simple form for user input. Current setup of frontend only allows for "city' as input as well as either "fahrenheit" or "celsius" for units. After inputting a valid city, user should see the weather pop up under the form with all of the information stated in the WeatherDisplay
  - `weatherApi.js`: For now, the logic for making an API call to the backend is abstracted. It is a reusable `fetchWeather` function that takes the city and units as parameters then handles fetching the data.
  - In `package.json`, added "proxy" as fix to make sure the app can route API calls to the backend while on different ports.

### Changed
- **Frontend**
  - Replaced placeholder code in `App.js` and `App.css` with title and weather data display.

### Known Issues
- **Invalid City Input**:
  - If the user inputs an invalid city name, the app currently crashes due no proper error handling. This will be addressed in a future update.
