import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.component.html',
    styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {
    date: Date;

    constructor() {}

    ngOnInit() {
        this.date = new Date();

        setInterval(() => {
            this.date = new Date();
        }, 60000);
    }
}
