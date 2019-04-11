import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-img-vi',
  templateUrl: './circle-img-vi.component.html',
  styleUrls: ['./circle-img-vi.component.scss']
})
export class CircleImgViComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
