import { Component, OnInit, Input } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition,
    group
  } from '@angular/animations';

  import { ClientClick } from './ClientClick';

@Component({
    selector: 'circle',
    styleUrls: ['./circle.component.css'],
    template: `
    <div class="ring" [@expand]
        [style.left.px]="clientClick.x - 300"
        [style.top.px]="clientClick.y - 300">
    </div>
    <div class="light" [@flash]
        [style.left.px]="clientClick.x - 300"
        [style.top.px]="clientClick.y - 300">
    </div>
    `,
    animations: [
        trigger('expand', [
          transition('void => *', [
            style({opacity: 1, transform: 'scale3d(.1,.1,.1) translateZ(0)'}),
            group([
              animate('5s',
                style({opacity: 0})),
              animate('5s cubic-bezier(0,.79,.13,.71)',
                style({transform: 'scale3d(1,1,1) translateZ(0)'}))
            ])
          ])
        ]),
        trigger('flash', [
          transition('void => *', [
            style({opacity: 1, transform: 'scale3d(.1,.1,.1) translateZ(0)'}),
            animate('0.05s ease-in',
              style({opacity: 1, transform: 'scale3d(1,1,1) translateZ(0)'})
            ),
            animate('1s ease-out',
              style({opacity: 0, transform: 'scale3d(0,0,0) translateZ(0)'})
            )
          ])
        ])
      ]
})

export class CircleComponent implements OnInit {
    constructor() { }

    @Input('clientClick')
    clientClick: ClientClick;

    ngOnInit() {
      console.log(this.clientClick);
    }
}