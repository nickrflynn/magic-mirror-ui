import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ConfigService } from '../config.service';
import { IWeatherConfig } from '../config.interface';

// OpenWeatherMap API models
export interface ITemperatureData {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface IWeatherData {
    main: ITemperatureData;
    weather: any;
}

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private baseApiUri = 'https://api.openweathermap.org/data/2.5/weather';

    constructor(private http: HttpClient, private configService: ConfigService) {}

    public getCurrentWeather(): Observable<IWeatherData> {
        return this.configService.getWeatherConfig().pipe(
            mergeMap((config: IWeatherConfig) => {
                return this.http
                    .get(`${this.baseApiUri}?lat=${config.latitude}&lon=${config.longitude}&units=imperial&&APPID=${config.apiKey}`)
                    .pipe(map(weather => <IWeatherData>weather));
            })
        );
    }
}
