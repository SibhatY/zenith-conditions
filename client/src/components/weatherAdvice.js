
export function getWeatherAdvice(main, temp, windSpeed) {

    let activity = "Enjoy your day as you wish!";
    let clothing = "Dress comfortably for the conditions.";

    // Extreme cold
    if (temp < 20) {
        activity = "Stay indoors if possible, freezing conditions outside!";
        clothing = "Heavy winter coat, gloves, hat, scarf, and boots.";
    } else if (temp < 40) {
        activity = "If outside, dress warmly, but consider indoor activities.";
        clothing = "Thick coat, gloves, and layered clothing.";
    }

    // Extreme heat
    else if (temp > 90) {
        activity = "Limit your outdoor activities, stay cool and hydrated.";
        clothing = "Wear light, breathable clothing and drink plenty of water.";
    } else if (temp > 75) {
        activity = "Great day for outdoor activities like hiking or biking!";
        clothing = "Wear light clothing and sunglasses.";
    }

    // Changes based on the weather conditions
    const weatherRecommendations = {
        Clear: {
            activity: temp > 50 ? "Perfect day for a walk or outdoor exercise." : "A crisp, clear day, bundle up if cold!",
            clothing: temp > 50 ? "Light jacket or sweater." : "Warm coat if needed."
        },
        Clouds: {
            activity: "Overcast skies, perfect for a calm day indoors or a cozy café visit.",
            clothing: "Wear layers; it might feel chilly."
        },
        Rain: {
            activity: "A great day for reading, movies, or indoor activities.",
            clothing: "Waterproof jacket and boots with an umbrella."
        },
        Snow: {
            activity: "Perfect for skiing, sledding, or staying cozy inside!",
            clothing: "Heavy winter clothing, gloves, and waterproof boots."
        },
        Thunderstorm: {
            activity: "Stay indoors and enjoy a cozy time, lightning risk outdoors.",
            clothing: "Waterproof gear if going outside, but better to stay in."
        },
        Drizzle: {
            activity: "A light jacket and umbrella are perfect for a short walk.",
            clothing: "Carry an umbrella to avoid getting wet."
        },
        Mist: {
            activity: "Be cautious if driving; low visibility.",
            clothing: "Wear a warm hoodie or sweater."
        },
        Default: {
            activity: "Enjoy your day!",
            clothing: "Dress appropriately for the weather."
        }
    };

    const weatherAdvice = weatherRecommendations[main] || weatherRecommendations["Default"];
    
    // To override certain conditions
    if (temp < 40 || temp > 90) {
        return { activity, clothing };
    } else {
        return { activity: weatherAdvice.activity, clothing: weatherAdvice.clothing };
    }
}
