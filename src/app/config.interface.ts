export interface IAppConfig {
    weather: IWeatherConfig;
}

export interface ICalendarConfig {
    apiKey: string;
    calendarId: string;
}

export interface IWeatherConfig {
    apiKey: string;
    latitude: number;
    longitude: number;
}
