import { Component, OnInit, ViewChild, AfterViewInit,Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { VIDEO_TIMMINGS } from '../../../../conf';
import { PresentationService } from '../../../shared/services/presentation.service';
@Component({
  selector: '[app-video]',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewInit {
  private intervalRewind;
  private rewinding: boolean;
  private endTime:number;
  private step:number;
  @ViewChild('video') video: any;
  constructor(
    private _presentationService: PresentationService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) {

  }
  ngOnInit() {
    this._presentationService.step$.subscribe(val =>{
      this.controlTiming(val, this.step > val)
      this.step = val;
    })
  }
  controlTiming(val, reverse) {
    let startTime;
    switch (true) {
      case val === 0:
        startTime = VIDEO_TIMMINGS.start
        this.endTime = VIDEO_TIMMINGS.frontStart;
        break;
      case val === 1:
        startTime = VIDEO_TIMMINGS.frontStart
        this.endTime = VIDEO_TIMMINGS.frontEnd;
        break;
      case val === 2:
        startTime = VIDEO_TIMMINGS.backStart
        this.endTime = VIDEO_TIMMINGS.backEnd;
        break;
      case val === 3:
        startTime = VIDEO_TIMMINGS.smileStart
        this.endTime = VIDEO_TIMMINGS.smileEnd;
        break;
      default:
        // code...
        break;
    }
    if( reverse ){
      this.video.nativeElement.currentTime = startTime;
    }
    this.video.nativeElement && this.video.nativeElement.play();

  }
  timeupdate($event) {
    if( this.video.nativeElement.currentTime >= this.endTime) {
      this.video.nativeElement.pause();
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.video.nativeElement.muted = "muted";
      this.video.nativeElement.currentTime = VIDEO_TIMMINGS.start;
    }
  }
}
