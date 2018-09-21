import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IWeatherConfig, ICalendarConfig } from './config.interface';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private configFilePath = './mirror-config.json';

    constructor(private http: HttpClient) {}

    public getCalendarConfig(): Observable<ICalendarConfig> {
        return this.http.get(this.configFilePath).pipe(map(config => <ICalendarConfig>config['calendar']));
    }

    public getWeatherConfig(): Observable<IWeatherConfig> {
        return this.http.get(this.configFilePath).pipe(map(config => <IWeatherConfig>config['weather']));
    }
}
