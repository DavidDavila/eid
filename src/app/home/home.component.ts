import { Component, Inject , OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { PLATFORM_ID } from '@angular/core';
import {isPlatformServer, isPlatformBrowser} from '@angular/common';
import { MetaTagsService } from './../shared/meta-tags.service';
import { PresentationService } from './../shared/services/presentation.service';
import { HomeService } from './../shared/services/home.service';
import { numberOfStepsOnPresentation} from './../../conf';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('home') home: ElementRef;
  public title:string;
  private slide;
  private stopScroll:boolean;
  private section:number = 0;
  constructor(
    private _homeService: HomeService,
    private _presentationService: PresentationService,
    private _metaTagsService: MetaTagsService,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private _platformId: Object,
) {
    this._metaTagsService.setTitle('david');
    this._metaTagsService.setMetaTags({name: 'description', content: 'description da' })
    this._presentationService.step$.subscribe( val =>{
      val === numberOfStepsOnPresentation + 1 && this.slide !== val ? this.stopScroll = true : '';
      this.slide = val;
    })
  }

  ngOnInit() {
  }
  mouseFinish(event, reverse){
    console.log('slide', this.slide)
    console.log('section', this.section)

    if(this.section === 4 && event.target.offsetParent.id === 'awards-list') return false;

    if(this.slide < numberOfStepsOnPresentation + 1) {
      return false;
    } else if(this.stopScroll) {
        this.stopScroll = false;
      }else{
        if(reverse) {
          event.deltaY  = event.deltaY * -1
        }
        if(event.deltaY > 0) {
          this.home.nativeElement.children.length - 1 > this.section ? this.section++ :'';
        } else {
          this.section > 0 ? this.section-- : this._presentationService.setStep(numberOfStepsOnPresentation);
        }
        let currentElement = this.home.nativeElement.children[this.section];
        this.home.nativeElement.scroll({ top: currentElement.offsetTop, behavior: 'smooth' })
        this._homeService.setsection(this.section)
    }
  }
}
