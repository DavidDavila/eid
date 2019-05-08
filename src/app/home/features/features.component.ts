import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../shared/services/home.service';

import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: '[app-features]',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ opacity: 1 }),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ]),
    ])
  ],
})
export class FeaturesComponent implements OnInit {
	public section:number;
  public lottieConfig: Object = {};
 
  constructor(
		private _homeService: HomeService ) {
		this._homeService.section$.subscribe( val=>{
			this.section = val;
      console.log(val)
      if(val === 3) {
      /*  this.lottieConfig = {
            path: '/assets/json/2.json',
            renderer: 'svg',
            autoplay: false,
            loop: false,
        };*/
      }
		});



  }

  ngOnInit() {
  }
  createLottie(name:string) {
    return this.lottieConfig = {
        path: '/assets/json/' + name + '.json',
        renderer: 'svg',
        autoplay: false,
        loop: false,
    };
  }
  handleAnimation(anim: any, delay: number) {
    console.log(anim)
    anim.setSpeed(1.5);
    setTimeout(()=>{anim.play()}, delay);
  }
}
