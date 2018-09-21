import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ICalendarConfig } from '../config.interface';
import { ConfigService } from '../config.service';

export interface ICalendarInfo {
    accessRole: string;
    defaultReminders: Array<any>;
    description: string;
    etag: string;
    items: Array<IEvent>;
    kind: string;
    nextSyncToken: string;
    summary: string;
    timeZone: string;
    updated: string;
}

export interface IEvent {
    created: string;
    creator: any; // {email: "nickrflynn@gmail.com", displayName: "Nick Flynn"}
    end: any;
    etag: string;
    htmlLink: string;
    iCalUID: string;
    id: string;
    kind: string;
    organizer: any; // {email: "flse212r4o10j3fkg34fqtj3gk@group.calendar.google.com", displayName: "The Flynns", self: true}
    sequence: number;
    start: IStartTime;
    status: string;
    summary: string;
    transparency: string;
    updated: string;
}

export interface IStartTime {
    date: string;
    dateTime: string;
}

export interface ICalendarItem {
    title: string;
    date: Date;
}

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    private baseApiUri = 'https://www.googleapis.com/calendar/v3';

    constructor(private http: HttpClient, private configService: ConfigService) {}

    public getTodaysEvents(): Observable<ICalendarInfo> {
        return this.configService.getCalendarConfig().pipe(
            mergeMap((config: ICalendarConfig) => {
                return this.http
                    .get(`${this.baseApiUri}/calendars/${config.calendarId}/events/?${this.getQueryParameters(1)}&key=${config.apiKey}`)
                    .pipe(map((calendar: ICalendarInfo) => <ICalendarInfo>calendar));
            })
        );
    }

    public getThisWeeksEvents(): Observable<ICalendarInfo> {
        return this.configService.getCalendarConfig().pipe(
            mergeMap((config: ICalendarConfig) => {
                return this.http
                    .get(`${this.baseApiUri}/calendars/${config.calendarId}/events/?${this.getQueryParameters(8, 1)}&key=${config.apiKey}`)
                    .pipe(map((calendar: ICalendarInfo) => <ICalendarInfo>calendar));
            })
        );
    }

    private getQueryParameters(days: number, skip: number = 0): string {
        const parameters: Array<string> = [];

        parameters.push('singleEvents=True');
        parameters.push('orderBy=startTime');

        const maxDate = new Date();
        maxDate.setTime(maxDate.getTime() + 1000 * 3600 * 24 * days);
        parameters.push(`timeMax=${maxDate.toISOString()}`);

        const today: Date = new Date();
        today.setTime(today.getTime() + 1000 * 3600 * 24 * skip);
        parameters.push(`timeMin=${today.toISOString()}`);

        let query = '';
        for (let i = 0; i < parameters.length; i++) {
            if (i > 0) {
                query += '&';
            }

            query += parameters[i];
        }

        return query;
    }
}
