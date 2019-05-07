
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public scroll = -1;
  @ViewChild('useCases') useCases: ElementRef;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

  canScrollIt(event){
    return (
      (document.body.offsetWidth < document.getElementById('sliderList').getBoundingClientRect().right
      && event.deltaY > 0)
      ||
      (document.body.offsetWidth < document.getElementById('sliderList').getBoundingClientRect().right
      && event.deltaY < 0)
      ||
      (document.body.offsetWidth > document.getElementById('sliderList').getBoundingClientRect().right
      && event.deltaY < 0)
    )   
  }

  mouseFinish($event, reverse){
    $event.preventDefault();
    $event.stopPropagation();

    if(this.canScrollIt($event)){

      if($event.deltaY > 0) {
        this.scroll++;
      } else {
         this.scroll--;
      }

      const liLength = this.useCases.nativeElement.getElementsByTagName('li');

      if ( this.scroll === 0) {
        this.useCases.nativeElement.style.transform = 'translateX(7.4vw)';
      } else if (this.scroll === -1) {
        this.useCases.nativeElement.style.transform = 'translateX(30vw)';
      } else if (this.scroll === 1) {
        this.useCases.nativeElement.style.transform = 'translateX(-18.5vw)';
      } else  if (this.scroll > 1) {
        const value = Number(this.useCases.nativeElement.style.transform.match(/\d+.\d+/)[0]);



        if($event.deltaY > 0 ) {
          this.useCases.nativeElement.style.transform = 'translateX(' + Number(-value - 26) + 'vw)';
        } else {
          this.useCases.nativeElement.style.transform = 'translateX(' + Number(-value + 26) + 'vw)';
        }      
      }

      for (let i = 0; i < liLength.length; i++) {
        liLength[i].classList.add('moving');
        setTimeout(() => {
          liLength[i].classList.remove('moving');
        }, liLength.length * 300);
      }
    }    
      
  }

}
