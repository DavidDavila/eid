import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { HomeService } from './../../shared/services/home.service';
@Component({
  selector: '[app-awards]',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  @ViewChild('scrollBar') scrollBar: ElementRef;
  @ViewChild('list') list: ElementRef;
  public scrolldelay:any;
  public isInView:boolean;
  constructor(private _homeService:HomeService) { }

  ngOnInit() {
    this._homeService.section$.subscribe(val =>{
        if (this.isInView = val >= 4) {
          this.list.nativeElement.scrollTo({top:0});
          this.scrolldelay && clearTimeout(this.scrolldelay);
          setTimeout((()=>{this.automaticScroll();}).bind(this),2600);
        }
    })



  }
  onScroll($event) {
    let totalHeight = $event.target.scrollHeight - $event.target.offsetHeight;
    let progress = $event.target.scrollTop * 100 / totalHeight;
    this.scrollBar.nativeElement.style.width = progress + '%';/*
    progress === 100? clearTimeout(this.scrolldelay) : this.automaticScroll();*/
  }
  continueScroll($event = undefined){
    if( $event) {

      $event.stopPropagation();
      $event.preventDefault();
    }
    clearTimeout(this.scrolldelay);
    setTimeout((()=>{
      this.automaticScroll();
    }).bind(this),5000)
  }
  automaticScroll(){
    clearTimeout(this.scrolldelay);
    this.list.nativeElement.scrollBy(0,1);
    this.scrolldelay = setTimeout(this.automaticScroll.bind(this),10);
  }
  modifyScroll(num) {

    this.continueScroll();
    this.list.nativeElement.scrollTo({
      top: this.list.nativeElement.scrollTop + num,
      behavior: 'smooth',
    })
  }

}
