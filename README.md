# MagicMirrorUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Configuration

Configuration information is supplied to the app via a `mirror-config.json` file you will need to add to the project root directory. This config file will contain API keys and should not be included in source control.

```
{
    "calendar": {
        "apiKey": "YOUR_KEY",
        "calendarId": "CALENDAR_ID"
    },
    "weather": {
        "apiKey": "YOUR_KEY",
        "latitude": 1,
        "longitude": 1
}
```

### Calendar Data

Calendar data is retrieved from Google Calendar. You will need to supply your own API key and the desired calendar ID in the `mirror-config.json` file.

### Weather Data

Current weather data and forecasts retrieved from [OpenWeatherMap API](https://openweathermap.org/api). You will need to supply your own API key in the `mirror-config.json` file.
