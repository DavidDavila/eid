import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SolutionsService } from './../../shared/services/solutions.service';
import { VIDEOS } from '../../../conf';
@Component({
  selector: 'app-signature-id',
  templateUrl: './signature-id.component.html',
  styleUrls: ['./signature-id.component.scss']
})
export class SignatureIdComponent implements OnInit {
  public lottieConfig: Object = {};
  public usesCases: any;
  public section: number = 0;
  @ViewChild('signatureId') signatureId: ElementRef;



  constructor(
    private _solutionsService: SolutionsService
  ) {
    this.usesCases = VIDEOS.signatureid;
    this._solutionsService.setsection(this.section);
  }

  ngOnInit() {
  }
  createLottie(name: string) {
    return this.lottieConfig = {
        path: '/assets/json/' + name + '.json',
        renderer: 'svg',
        autoplay: false,
        loop: false,
    };
  }
  handleAnimation(anim: any, delay: number) {
    console.log(anim);
    anim.setSpeed(1.5);
    setTimeout(() => { anim.play() }, delay);
  }

  mouseFinish(event, reverse){
    if(event.deltaY > 0) {
      this.section++;
    } else {
    this.section-- ;
    }

    this._solutionsService.setsection(this.section);

    let currentElement = this.signatureId.nativeElement.children[this.section];
    this.signatureId.nativeElement.scroll({ top: currentElement.offsetTop, behavior: 'smooth' })
  }
}
