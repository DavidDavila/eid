import { Component, OnInit,Input } from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: '[app-slider]',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slide: number;
  constructor() { }

  ngOnInit() {
  }

}
