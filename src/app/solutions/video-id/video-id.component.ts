import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SolutionsService } from './../../shared/services/solutions.service';

import { CircleImgViComponent } from './circle-img-vi/circle-img-vi.component';

@Component({
  selector: 'app-video-id',
  templateUrl: './video-id.component.html',
  styleUrls: ['./video-id.component.scss']
})
export class VideoIdComponent implements OnInit {
  public section:number = 0;
  public subSection:number = 1;

  public lottieConfig: Object = {};

  public circles: any[] = [
        {
          "img": "ordenador.png",
          "text": "Web",
          "class": "withMargin",
          "classImg": "oneImg"
        },
        {
          "img": "mobile.png",
          "text": "Native mobile",
          "class": "withMargin",
          "classImg": "twoImg"
        },
        {
          "img": "atm.png",
          "text": "ATMs",
          "class": "withMargin",
          "classImg": "threeImg"
        },
        {
          "img": "kiosk.png",
          "text": "Kiosks",      
          "classImg": "fourImg"
        }
      ];

  @ViewChild('videoId') videoId: ElementRef;
  @ViewChild('items') items: ElementRef;
  @ViewChild('videoIdSubSection') videoIdSubSection: ElementRef;

	public	item1: string = '';
  	public	item2: string = 'hidden';
  	public	item3: string = 'hidden';
  
	  public line1:string = ''; 
	  public line2:string = 'bottom'; 
	  public line3:string = 'bottom'; 

	  public lines:string = 'line1'; 

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

    if(this.section == 1){
      if(event.deltaY > 0) {
      	if(this.subSection == 3){
			this.section++;
			this.goToSection(this.section);
      	}else{
      		this.items.nativeElement.classList.add('top')
        	this.subSection++;
      	}
      } else {
      	if(this.subSection == 1){
			this.section--;
			this.goToSection(this.section);
      	}else{
      		this.items.nativeElement.classList.remove('top')
			    this.subSection-- ;
      	}
      }

      this.animNav(this.subSection)
      this.goToSubSection(this.subSection);

    }else{
      if(event.deltaY > 0) {
        this.section++;
      } else {
        this.section-- ;
      }

      this.goToSection(this.section);
    }
    
  }

  goTo(subSection){

    if(subSection > this.subSection){      
      this.items.nativeElement.classList.add('top')
    }else{
      this.items.nativeElement.classList.remove('top')
    }

    this.subSection = subSection;
    this.animNav(this.subSection);
  }

  animNav(numSection){
  	switch (numSection) {
  		case 1:
  			this.item1 = ''
		  	this.item2 = 'hidden'
		  	this.item3 = 'hidden'

		  	this.line1 = '';
		  	this.line2 = 'bottom';
		  	this.line3 = 'bottom';

		  	this.lines = 'line1';
  			break;

  		case 2:
  			this.item1 = 'hidden'
		  	this.item2 = ''
		  	this.item3 = 'hidden'

		  	this.line1 = '';
		  	this.line2 = '';
		  	this.line3 = 'bottom';

		  	this.lines = 'line2';
  			break;

  		case 3:
  			this.item1 = 'hidden'
		  	this.item2 = 'hidden'
		  	this.item3 = ''

		  	this.line1 = '';
		  	this.line2 = '';
		  	this.line3 = '';

		  	this.lines = 'line3';
  			break;
  		
  		default:
  			// code...
  			break;
  	}
  }

  goToSection(numSection){ 
    this._solutionsService.setsection(this.section);

    console.log('section: ', this.section)
    let currentElement = this.videoId.nativeElement.children[this.section];
    this.videoId.nativeElement.scroll({ top: currentElement.offsetTop, behavior: 'smooth' })
  }

  goToSubSection(numSubSection){ 
    console.log('subSection: ', this.subSection)

    let currentElement = this.videoIdSubSection.nativeElement.children[this.subSection];
    this.videoIdSubSection.nativeElement.scroll({ top: currentElement.offsetTop, behavior: 'smooth' })
  }


  createLottie(name:string) {
    return this.lottieConfig = {
        path: '/assets/json/' + name + '.json',
        renderer: 'svg',
        autoplay: false,
        loop: false,
    };
  }

  play(ev){  
    var playPromise = ev.currentTarget.play();

    if (playPromise !== undefined) {
      playPromise.then(function() {
        console.log('play');
      }).catch(function(error) {
        console.log('play Error');
      });
    }
  }

  pause(ev){
    ev.currentTarget.pause();
  }

}
