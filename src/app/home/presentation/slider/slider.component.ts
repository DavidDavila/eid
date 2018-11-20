import { Component, OnInit,Input } from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: '[app-slider]',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
    animations: [
      trigger('parentAnimation', [
                  transition(':enter', [
                      query('.child', style({transform:'translateY(4vh)',opacity: 0})),
                      query('.child', stagger('200ms', [
                          animate('500ms 650ms ease-out', style({transform:'translateY(0vh)',opacity: 1}))
                      ]))
                  ]),
                  transition(':leave', [
                      query('.child', style({transform:'translateY(0vh)',opacity: 1})),
                      query('.child', stagger('100ms', [
                          animate('500ms 1ms ease-out', style({transform:'translateY(-14vh)',opacity: 0}))
                      ]))
                  ])
              ])
    ]
})
export class SliderComponent implements OnInit {
  @Input() slide: number;
  constructor() { }

  ngOnInit() {
  }

}
