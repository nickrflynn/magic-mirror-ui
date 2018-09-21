import { Component, OnInit } from '@angular/core';
import { WeatherService, IWeatherData } from './weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
    weatherData: IWeatherData;

    constructor(private weatherService: WeatherService) {}

    ngOnInit() {
        this.weatherService.getCurrentWeather().subscribe((weather: IWeatherData) => {
            this.weatherData = weather;
        });
    }
}
