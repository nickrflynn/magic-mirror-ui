import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { CalendarService } from './calendar/calendar.service';
import { ConfigService } from './config.service';
import { WeatherService } from './weather/weather.service';
import { DayPipe } from './pipes/day.pipe';
import { DateSuffixPipe } from './pipes/date-suffix.pipe';

@NgModule({
    exports: [CdkTableModule, MatTableModule]
})
export class MaterialModule {}

@NgModule({
    declarations: [AppComponent, CalendarComponent, DayPipe, ClockComponent, DateSuffixPipe, WeatherComponent],
    imports: [BrowserModule, MaterialModule, HttpClientModule],
    providers: [DatePipe, CalendarService, ConfigService, WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule {}
