import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateSuffix'
})
export class DateSuffixPipe implements PipeTransform {
    transform(value: string): string {
        let suffix = 'th';
        const day = value.match(/\d+/g)[0];

        if (day === '1' || day === '21' || day === '31') {
            suffix = 'st';
        } else if (day === '2' || day === '22') {
            suffix = 'nd';
        } else if (day === '3' || day === '23') {
            suffix = 'rd';
        }

        return `${value}${suffix}`;
    }
}
