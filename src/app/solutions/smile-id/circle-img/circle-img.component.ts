import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-img',
  templateUrl: './circle-img.component.html',
  styleUrls: ['./circle-img.component.scss']
})
export class CircleImgComponent implements OnInit {

  @Input() data;
  public show: boolean = false

  constructor() { }

  ngOnInit() {

  	let time = (this.data.timing) ? 300 * this.data.timing : 10;
  	setTimeout(function(){ 
  		this.show = true;
  	}.bind(this), time);

  }

}
