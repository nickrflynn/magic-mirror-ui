import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CalendarItemsComponent } from './calendar-items/calendar-items.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { DateSuffixPipe } from './date-suffix.pipe';

@NgModule({
    exports: [CdkTableModule, MatTableModule]
})
export class MaterialModule {}

@NgModule({
    declarations: [AppComponent, CalendarItemsComponent, DateTimeComponent, DateSuffixPipe],
    imports: [BrowserModule, MaterialModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
