# Aether Nova - Celestial Weather Experience
Live Demo: [https://aethernova.cloud/](https://aethernova.cloud/)

## Features
- Celestial-inspired UI
- Real-time weather updates based on user input
- Search by city, state, or country
- Secure API usage with backend proxying
- Responsive design
- Clothing and activity recommendations based on conditions



## Tech Stack
**Frontend**: React, CSS, React Select for autocomplete

**Backend**: Node.js, Express, Axios

**Security**: Helmet for security headers, Rate Limiting

**Deployment**: Heroku


## Quality Assurance

Aether Nova has been manually tested for workflows, error handling, responsiveness, and API stability. A manual test plan has been documented and is available below:

📋 [View Manual Test Plan](./MANUAL_TESTS.md)

*Testing is ongoing*



## Local Installation & Setup (Optional)

> To run the app locally, you need Node.js and npm installed.

### **1. Clone the repository**
```git clone https://github.com/SibhatY/zenith-conditions.git```

```cd zenith-conditions```

### **2. Install dependencies**
```npm install```

```cd client && npm install```

```cd ../server && npm install```

### **3. Set up environment variables**
Create a .env file in both the server/ and client/ directories and add your api keys from [OpenWeather](https://openweathermap.org/).

### **4. Start the application**
Run both frontend and backend servers with ```npm start```

