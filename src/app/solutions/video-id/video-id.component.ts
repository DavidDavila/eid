import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SolutionsService } from './../../shared/services/solutions.service';

@Component({
  selector: 'app-video-id',
  templateUrl: './video-id.component.html',
  styleUrls: ['./video-id.component.scss']
})
export class VideoIdComponent implements OnInit {
  public section:number = 0;

  public lottieConfig: Object = {};

  @ViewChild('videoId') videoId: ElementRef;

  constructor(
    private _solutionsService: SolutionsService
    ) { 
	this._solutionsService.setsection(this.section);
  }

  ngOnInit() {
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
    let currentElement = this.videoId.nativeElement.children[this.section];
    this.videoId.nativeElement.scroll({ top: currentElement.offsetTop, behavior: 'smooth' })
  }

  createLottie(name:string) {
    return this.lottieConfig = {
        path: '/assets/json/' + name + '.json',
        renderer: 'svg',
        autoplay: false,
        loop: false,
    };
  }

}
