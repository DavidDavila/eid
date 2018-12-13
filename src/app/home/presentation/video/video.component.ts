import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit,Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { VIDEO_TIMMINGS } from '../../../../conf';
import { PresentationService } from '../../../shared/services/presentation.service';
declare const VideoFrame:any;
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
  private videoController: any;
  private loop:boolean = true;
  private firstTime:boolean = true;
  private reverse: boolean;
  @Output('disableScroll') disableScroll= new EventEmitter();
  @ViewChild('video') video: any;
  constructor(
    private _presentationService: PresentationService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) {

  }
  ngOnInit() {
    this._presentationService.step$.subscribe(val =>{
      this.reverse = this.step > val;
      this.controlTiming(val, this.reverse)
      this.step = val;
    })
  }
  controlTiming(val, reverse) {
    let startTime;
    this.firstTime = true;
    switch (val) {
      case 0:
        if(!this.reverse){
        } else {
          this.videoController.seekTo({ frame: VIDEO_TIMMINGS.frontToStandBy[0] })
        }
        break;
      case 1:
        this.disableScroll.emit(true);
        this.loop = false;
        if(!this.reverse){
          this.videoController.seekTo({ frame: VIDEO_TIMMINGS.all[0] })
        }else {
          this.videoController.seekTo({ frame: VIDEO_TIMMINGS.backToFront[0] })
        }
        break;
      case 2:
        this.loop = false;
        this.disableScroll.emit(true);
        if(!this.reverse){
          this.videoController.seekTo({ frame: VIDEO_TIMMINGS.frontEnd })
        } else {
          this.videoController.seekTo({ frame: VIDEO_TIMMINGS.smileToBack[0] })
        }

        break;
      case 3:
        this.loop = false;
        this.disableScroll.emit(true);

        if(!this.reverse){
          this.videoController.seekTo({ frame: VIDEO_TIMMINGS.backEnd })
        }

        break;
      default:
        // code...
        break;
    }

    isPlatformBrowser(this.platformId) && this.video.nativeElement && this.video.nativeElement.paused && this.video.nativeElement.play();

  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.video.nativeElement.muted = "muted";
      //this.video.nativeElement.currentTime = VIDEO_TIMMINGS.start;
      let FrameRates = {
        film: 24,
        NTSC : 29.97,
        NTSC_Film: 23.98,
        NTSC_HD : 59.94,
        PAL: 25,
        PAL_HD: 50,
        web: 30,
        high: 60
      };
      this.videoController = VideoFrame({
        id : 'videoPlayer',
        frameRate: FrameRates.PAL_HD,
        callback : ((response)=> {

          this.timeUpdate(response)
        }).bind(this)
      });
      this.videoController.seekTo({ frame: VIDEO_TIMMINGS.standBy[0] })
      this.videoController.listen('frame', 1)

    }
  }
  timeUpdate(frame) {
    if(!this.reverse) {
      switch (this.step) {
        case 0:
          if(frame >= VIDEO_TIMMINGS.standBy[1]){
            this.videoController.seekTo({ frame: VIDEO_TIMMINGS.standBy[0] })
          }
          // code...
          break;
        case 1:
          if( frame >=  VIDEO_TIMMINGS.frontStart && !this.loop) {
            this.disableScroll.emit(false);
            this.loop = true;
            this.videoController.seekTo({ frame: VIDEO_TIMMINGS.frontLoop[0] })
          }
          if( frame >=  VIDEO_TIMMINGS.frontLoop[1] && this.loop) {

            this.videoController.seekTo({ frame: VIDEO_TIMMINGS.frontLoop[0] })
          }
        break
        case 2:

          if( frame >=  VIDEO_TIMMINGS.backStart && !this.loop) {

            this.loop = true;
            this.videoController.seekTo({ frame: VIDEO_TIMMINGS.backLoop[0] })
          }
          if( frame >=  VIDEO_TIMMINGS.backLoop[1] && this.loop) {
            this.disableScroll.emit(false);
            this.videoController.seekTo({ frame: VIDEO_TIMMINGS.backLoop[0] })
          }
        break
        case 3:
          if( frame >=  VIDEO_TIMMINGS.all[1] && !this.loop) {

            this.videoController.video.pause();
          }
        break
        default:
          // code...
          break;
      }
    }else {
      switch (this.step) {
        case 0:
          if(frame >= VIDEO_TIMMINGS.frontToStandBy[1]){
            this.disableScroll.emit(false);
            this.videoController.seekTo({ frame: VIDEO_TIMMINGS.standBy[0] })
            this.reverse = false;
          }
          // code...
          break;
        case 1:
          if( frame >=  VIDEO_TIMMINGS.backToFront[1]) {
            this.disableScroll.emit(false);
            this.videoController.seekTo({ frame: VIDEO_TIMMINGS.frontLoop[0] })
            this.reverse = false;
          }
        break
        case 2:

          if( frame >=  VIDEO_TIMMINGS.smileToBack[1]) {
            this.disableScroll.emit(false);
            this.videoController.seekTo({ frame: VIDEO_TIMMINGS.backLoop[0] })
            this.reverse = false;
          }
        break
        default:
          // code...
          break;
      }
    }
  }
}
