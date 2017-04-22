import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  animate,
  transition,
  style 
} from '@angular/animations';

@Component({
  selector: 'awf-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  animations: [
    trigger("Story", [
      state("loaded", style({
        transform: 'scale(1)'
      })),
      transition('void => *', [style({transform: 'scale(1.01)'}), animate('1000ms ease-out')])
    ])
  ]
})
export class StoryComponent  {
  loaded: string = "loaded";

}
