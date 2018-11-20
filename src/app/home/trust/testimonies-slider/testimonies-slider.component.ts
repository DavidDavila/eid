import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { TESTIMONIES } from '../../../../conf';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: '[app-testimonies-slider]',
  templateUrl: './testimonies-slider.component.html',
  styleUrls: ['./testimonies-slider.component.scss']
})
export class TestimoniesSliderComponent implements OnInit {
  public testimonies = TESTIMONIES;
  @ViewChild('list') list:ElementRef;
  public scrollNumber: number;
  public scrollPosition: number = 0;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    //console.log('DAVIDDDDDDDDDDDDDDDDD', isPlatformBrowser(this.platformId))
    if (isPlatformBrowser(this.platformId)) {
       this.scrollNumber =  window.innerWidth - window.innerWidth/1.5 ;
    }
  }
  scroll(number) {
    if((this.scrollPosition > this.scrollNumber && number>0 )|| (this.scrollPosition <=0 && number<0) ) {
      return false;
    }
   this.list.nativeElement.scroll({
      top: 0,
      left: this.scrollPosition += number,
      behavior: 'smooth'
    });
  }
}
