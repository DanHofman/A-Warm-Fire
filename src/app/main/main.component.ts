import { Component } from '@angular/core';

import {
  trigger,
  state,
  animate,
  transition,
  style 
} from '@angular/animations';

@Component({
  selector: 'awf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger("Landing", [
      state("landed", style({
        opacity: '1'
      })),
      transition('void => *', [style({opacity: '0.8'}), animate(1000)])
    ])
  ]
})

export class MainComponent {
  landing: string = "landed";
}
