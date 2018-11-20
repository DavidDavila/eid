import { Component, OnInit, AfterViewInit,Inject } from '@angular/core';
import { CLIENTS } from '../../../../conf';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare const Swiper: any;
@Component({
  selector: '[app-slider-clients]',
  templateUrl: './slider-clients.component.html',
  styleUrls: ['./slider-clients.component.scss']
})
export class SliderClientsComponent implements OnInit, AfterViewInit {
  public clients = CLIENTS;
  public swiper;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
  }
  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {
      this.swiper = new Swiper('.swiper-clients', {
        slidesPerView: 5,
        speed: 800,
        spaceBetween: 112,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: true
      });
    }
  }
}
