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
          "classImg": "one",
          "timing": 1
        },
        {
          "img": "web.png",
          "text": "Web",
          "class": "withMargin",
          "classImg": "two",
          "timing": 2
        },
        {
          "img": "mobile.png",
          "text": "Native mobile",
          "class": "withMargin",
          "classImg": "three",
          "timing": 3
        },
        {
          "img": "atm.png",
          "text": "ATM",          
          "class": "withMargin",
          "classImg": "four",
          "timing": 4
        },
        {
          "img": "cctv.png",
          "text": "CCTV",
          "classImg": "five",
          "timing":5
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
    let totalSections =  this.smileId.nativeElement.childElementCount - 1;
    let sectionChanged = false; 

    if(event.deltaY > 0) {
      if( this.section < totalSections ){
        this.section++;
        sectionChanged = true;
      }
    } else {
      if( this.section > 0 ){
        this.section-- ;
        sectionChanged = true;
      }
    }

    if(sectionChanged){
      this._solutionsService.setsection(this.section);

      console.log('section: ', this.section)
      let currentElement = this.smileId.nativeElement.children[this.section];
      this.smileId.nativeElement.scroll({ top: currentElement.offsetTop, behavior: 'smooth' })
    }

  }
}
