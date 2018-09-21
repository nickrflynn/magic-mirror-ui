# MagicMirrorUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Configuration

Configuration information is supplied to the app via a `mirror-config.json` file you will need to add to the project root directory. It should look like this:

```
{
    "weather": {
        "apiKey": "YOUR_KEY",
        "latitude": 37.271,
        "longitude": -112.949
    }
}
```

### Weather Data

Current weather data and forecasts retrieved from [OpenWeatherMap API](https://openweathermap.org/api). You will need to supply your own API key in the `mirror-config.json` file.
