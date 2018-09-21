import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CalendarItemsComponent } from './calendar-items/calendar-items.component';

@NgModule({
    exports: [CdkTableModule, MatTableModule]
})
export class MaterialModule {}

@NgModule({
    declarations: [AppComponent, CalendarItemsComponent],
    imports: [BrowserModule, MaterialModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
