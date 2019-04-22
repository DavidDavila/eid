import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ScrollService } from './shared/services/scroll.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showCanvas:boolean = false;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  cursorHoverElements:Array<string> = [
  'A',
  'BUTTON',
  'INPUT',
  'TEXTAREA'
  ]
  public logoClass: string = 'show';
  public logoImgClass: string = 'hide';

  @ViewChild('cursor') cursor: ElementRef;
  @ViewChild('main') main: ElementRef;

  constructor(
    private _scrollService:ScrollService, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this._scrollService.section$.subscribe( val=>{
     this.logoClass = val ? 'show' : 'hide' ;
     this.logoImgClass = val ? 'hide' : 'false' ;

     console.log('val--> ' + val);
    })
  }

  ngOnInit() {
    if (this.showCanvas = isPlatformBrowser(this.platformId)) {
      this.makeCursor()
      //this.makeParticles();
    }


  }
  makeCursor(){
    this.main.nativeElement.addEventListener('mousemove', ((event)=>{
      if(this.cursorHoverElements.indexOf(event.path[0].tagName) > -1 || event.path[0].classList.contains('custom-cursor')){
        let pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
        let clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
        this.cursor.nativeElement.style.top = event.pageY + 'px';
        this.cursor.nativeElement.style.left = event.pageX + 'px';
        this.cursor.nativeElement.classList.add('hover');
      }else{
        this.cursor.nativeElement.classList.remove('hover');

      }
    }).bind(this))
    this.main.nativeElement.addEventListener('click', ((event)=>{
      if(this.cursor.nativeElement.classList.contains('hover')) {
        this.cursor.nativeElement.classList.remove('hover');
        setTimeout((()=>{
            this.cursor.nativeElement.classList.add('hover');
        }).bind(this),100)
      }

    }).bind(this))
  }
  makeParticles(){
    this.myStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': -2,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };

    this.myParams = {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.22096133965703635,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.12787212787212787,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.1183721462448409,
          "width": 1.5782952832645454
        },
        "move": {
          "enable": true,
          "speed": 1.4,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
  }
  onActivate($event) {
    this._scrollService.setToZero();
  }
}
