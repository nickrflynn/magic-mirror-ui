import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
    date: Date;

    constructor() {}

    ngOnInit() {
        this.date = new Date();

        setInterval(() => {
            this.date = new Date();
        }, 60000);
    }
}
