import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import { PresentationService } from './../../shared/services/presentation.service';
import { numberOfStepsOnPresentation } from '../../../conf'
@Component({
  selector: '[app-presentation]',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    trigger('parentAnimation', [
                transition(':enter', [
                    query('.child', style({transform:'translateY(4vh)',opacity: 0})),
                    query('.child', stagger('200ms', [
                        animate('500ms .1s ease-out', style({transform:'translateY(0vh)',opacity: 1}))
                    ]))
                ]),
                transition(':leave', [
                    query('.child', style({transform:'translateY(0vh)',opacity: 1})),
                    query('.child', stagger('100ms', [
                        animate('500ms .1s ease-out', style({transform:'translateY(-14vh)',opacity: 0}))
                    ]))
                ])
            ])
  ]

})
export class PresentationComponent implements OnInit {
  public slide:number = 0;
  public isMoving:boolean;
  @ViewChild('presentation') presentation: ElementRef;
  constructor( private _presentationService: PresentationService) {
    this._presentationService.step$.subscribe( val =>{
      this.slide = val;
    })
  }
  ngOnInit() {



  }
  mouseFinish(event, reverse) {
    if(reverse ) {
      if(event.direction === 8 || event.direction === 16) {
        event.deltaY  = event.deltaY * -1;          
      } else{
        return false;
      }
    }
    if(event.deltaY > 0 && this.slide < numberOfStepsOnPresentation + 1){
      this.slide++;
    } else if(event.deltaY < 0){
      this.slide > 0 && this.slide--;
    }
    this._presentationService.setStep(this.slide)
    return false;
  }
}
