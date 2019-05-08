import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';

import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import { PresentationService } from './../../shared/services/presentation.service';
import { numberOfStepsOnPresentation } from '../../../conf';

import { PLATFORM_ID } from '@angular/core';
import {isPlatformServer, isPlatformBrowser} from '@angular/common';

@Component({
  selector: '[app-presentation]',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  public slide = 0;
  public isMoving: boolean;
  public disableScroll = false;
  @ViewChild('presentation') presentation: ElementRef;
  constructor( private _presentationService: PresentationService, @Inject(PLATFORM_ID) private _platformId: Object, ) {
    this._presentationService.step$.subscribe( val => {
      this.slide = val;
    });

  }
  ngOnInit() {
    if (isPlatformBrowser(this._platformId)) {
      const mc = new Hammer(this.presentation.nativeElement);
       mc.get('swipe').set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 1,
        velocity: 0.1
      });
      mc.on('swipeup swipedown', ((ev) => {
        this.mouseFinish(ev, true);
      }).bind(this));
    }
  }
  mouseFinish(event, reverse) {
    if (isPlatformBrowser(this._platformId)) {
      if (reverse ) {
        if (event.direction === 8 || event.direction === 16) {
          event.deltaY  = event.deltaY * -1;
        } else {
          return false;
        }
      }
      if (event.deltaY > 0 && this.slide < numberOfStepsOnPresentation + 1) {
        this.slide++;
      } else if (event.deltaY < 0) {
// tslint:disable-next-line: no-unused-expression
        this.slide > 0 && this.slide--;
      }
      this._presentationService.setStep(this.slide);
      return false;
    }
  }
}
