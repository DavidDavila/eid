import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-img',
  templateUrl: './circle-img.component.html',
  styleUrls: ['./circle-img.component.scss']
})
export class CircleImgComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
