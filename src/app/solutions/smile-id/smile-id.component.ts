import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-smile-id',
  templateUrl: './smile-id.component.html',
  styleUrls: ['./smile-id.component.scss']
})
export class SmileIdComponent implements OnInit {
  private section:number = 0;
  @ViewChild('smileId') smileId: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  mouseFinish(event, reverse){
    if(event.deltaY > 0) {
      this.section++;
    } else {
    this.section-- ;
    }
    let currentElement = this.smileId.nativeElement.children[this.section];
    this.smileId.nativeElement.scroll({ top: currentElement.offsetTop, behavior: 'smooth' })
  }
}
