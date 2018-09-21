import { Component } from '@angular/core';

export interface CalendarItem {
    title: string;
    date: Date;
}

const DUMMY_DATA: Array<CalendarItem> = [
    { title: 'This is a thing I have to do', date: new Date() },
    { title: 'And this is a fun thing we get to go to', date: new Date() }
];

@Component({
    selector: 'app-calendar-items',
    templateUrl: './calendar-items.component.html',
    styleUrls: ['./calendar-items.component.scss']
})
export class CalendarItemsComponent {
    displayedColumns: Array<string> = ['title', 'date'];
    dataSource = DUMMY_DATA;
}
