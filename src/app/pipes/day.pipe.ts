import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { isDate } from 'util';

@Pipe({
    name: 'day'
})
export class DayPipe implements PipeTransform {
    constructor(private datePipe: DatePipe) {}

    transform(date: string | Date): string | Date {
        let dateFormat = 'EEE M/d';

        if (isDate(date)) {
            dateFormat = 'EEE M/d, h:mm a';
        } else {
            date = new Date(date);
        }

        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        const isTomorrow = date.toDateString() === tomorrow.toDateString();

        if (isToday) {
            return 'Today';
        } else if (isTomorrow) {
            return 'Tomorrow';
        }

        return this.datePipe.transform(date, dateFormat);
    }
}
