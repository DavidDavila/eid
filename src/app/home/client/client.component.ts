import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../shared/services/home.service';

@Component({
  selector: '[app-client]',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public counter:number = 0;
 constructor(
    private _homeService: HomeService ) {
    this._homeService.section$.subscribe( val=>{
      if( val === 1 ) {
        setTimeout((()=>{this.startCounter()}).bind(this),800);
      }
    });
  }
  startCounter() {
    let time = 0;
    let diff = 89;

    let minTime = 0;
    let maxTime = 1500;
    function easeInOutQuad(t, b, c, d) {
       /* t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;*/
         t /= d/2;
        if (t > 1){ t -= 2;return c/2*(t*t*t + 2) + b;}

      return c/2*t*t*t + b;

    };

    function easeOutQuad(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    }

    function easeInQuad(t, b, c, d) {
      return c * (t /= d) * t + b;
    }

    for (let i = 0, len = diff; i <= len; i++) {
      (() => {
        setTimeout(()=> {
            this.counter < 90 && this.counter++;
          }, time);
      })();

      time = easeOutQuad(i, minTime, maxTime, diff);
    }
  }
  ngOnInit() {
  }

}
