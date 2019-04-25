import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SolutionsService } from './../../shared/services/solutions.service';
 
import { CircleImgComponent } from './circle-img/circle-img.component';
import { VIDEOS } from '../../../conf';
 
@Component({
  selector: 'app-smile-id',
  templateUrl: './smile-id.component.html',
  styleUrls: ['./smile-id.component.scss']
})
export class SmileIdComponent implements OnInit {
  public section:number = 0;
  public usesCases: any;
  public circles: any[] = [
        {
          "img": "access.png",
          "text": "Access buildings",
          "class": "withMargin",
          "classImg": "one"
        },
        {
          "img": "web.png",
          "text": "Web",
          "class": "withMargin",
          "classImg": "two"
        },
        {
          "img": "mobile.png",
          "text": "Native mobile",
          "class": "withMargin",
          "classImg": "three"
        },
        {
          "img": "atm.png",
          "text": "ATM",          
          "class": "withMargin",
          "classImg": "four"
        },
        {
          "img": "cctv.png",
          "text": "CCTV",
          "classImg": "five"
        }
      ];

  public lottieConfig: Object = {};

  @ViewChild('smileId') smileId: ElementRef;

  constructor(
    private _solutionsService: SolutionsService
    ) {    
    this.usesCases = VIDEOS.smileid;
    this._solutionsService.setsection(this.section);
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

  mouseFinish(event, reverse){
    if(event.deltaY > 0) {
      this.section++;
    } else {
      this.section-- ;
    }

    this._solutionsService.setsection(this.section);

    console.log('section: ', this.section)
    let currentElement = this.smileId.nativeElement.children[this.section];
    this.smileId.nativeElement.scroll({ top: currentElement.offsetTop, behavior: 'smooth' })
  }
}
