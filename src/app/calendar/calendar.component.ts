import { Component, OnInit } from '@angular/core';
import { CalendarService, IEvent, ICalendarInfo } from './calendar.service';

interface IDisplayEvent {
    title: string;
    date: string | Date;
}

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    todayDisplayedColumns: Array<string> = ['title', 'date'];
    todayDataSource: Array<IDisplayEvent>;
    weekDisplayedColumns: Array<string> = ['title', 'date'];
    weekDataSource: Array<IDisplayEvent>;

    constructor(private calendarService: CalendarService) {}

    ngOnInit() {
        this.calendarService.getTodaysEvents().subscribe(calendarInfo => {
            this.todayDataSource = this.mapEventsForDisplay(calendarInfo);
        });

        this.calendarService.getThisWeeksEvents().subscribe(calendarInfo => {
            this.weekDataSource = this.mapEventsForDisplay(calendarInfo);
        });
    }

    private mapEventsForDisplay(calendarInfo: ICalendarInfo): Array<IDisplayEvent> {
        return calendarInfo.items.map((event: IEvent) => {
            return {
                title: event.summary,
                date: event.start.date ? event.start.date : new Date(event.start.dateTime)
            };
        });
    }
}
