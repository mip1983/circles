import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferTime';

import { ClientClick } from './ClientClick';

@Component({
    selector: 'circles',
    template: `
        <h2>Circles</h2>
        <circle *ngFor="let click of clicks | async" [clientClick]="click"></circle>
    `
})

export class CirclesComponent implements AfterViewInit {

    clicksSubject = new Subject<{x: number, y: number}>();

    clicks: Observable<ClientClick[]> = this.clicksSubject.map(({x, y}) => {
        let clientClick = {
            x,
            y,
            state: 'active'
        };
        return clientClick;
    }).bufferTime(5000, 10);

    @HostListener('document:click', ['$event'])
    onClick(event:MouseEvent) {
        this.clicksSubject.next({x: event.clientX, y: event.clientY});
    }

    constructor() { }

    ngAfterViewInit() { 
        // Curious side effect I don't understand. If I subscribe, the log gets spammed in some infinite loop.
        // this.clicks.subscribe((click) => {
        //     console.log(click)
        // });
    }
}