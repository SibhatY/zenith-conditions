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



## [0.3.0] - 2024-01-01
### Added
- **Frontend**
  - Enhanced `WeatherForm.js` to support user inputs for state and country properly. Specifically a conditional dropdown for U.S. states. So when users enter "US" into "country" query, a list of all states become available to choose from.
  - Enhanced `WeatherDisplay.js` into a weather-card with a cleaner display of weather information.
  - Introduced `WeatherDisplay.css` for improved styling of information and to match the overall UI.
  - Introduced `WeatherForm.css` for improved styling like hover effects and responsiveness.
  - Improved `App.css` with gradient background and animated text for visually appealing interface.

### Changed
- **Frontend**
  - Updated `weatherApi.js` to accept 'state' and 'country' as additional parameters.

### Fixed
- **Frontend**
  - If user inputs any invalid or unknown information, when the backend returns an error, the WeatherForm sets an error message in the `App.js` state. If a new request is made and its valid, the error message is cleared and replaced with the proper WeatherDisplay card

### Known Issues
- **Stylistic Problems**:
  - Since the default state of the app is centered on the screen, when a weather display card pops up, it abruptly pushes the form and title up to fill in space properly. May be changed by moving the title and form back to the top or having a smoother transition when the weather display appears. TBD.
  - The way that the form input is designed is a bit awkward. When a user enters a city which is mandatory, the user must enter a country code and the "US" as an input allows for the abrupt appearance of State selection. may decide to change this up stylistically for cleanliness. TBD.
