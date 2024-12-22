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
