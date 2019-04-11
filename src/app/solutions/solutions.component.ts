import { Component, OnInit } from '@angular/core';
import { SolutionsService } from './../shared/services/solutions.service';
import { ScrollService } from './../shared/services/scroll.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  public btnClass: any;

  constructor(
  	private _solutionsService: SolutionsService,
    private _scrollService: ScrollService
  ) {
  	this._solutionsService.section$.subscribe( val => {
  	  this.btnClass = val > 0 ? 'visible' : '';
  	});
  }

  ngOnInit() {
  }
  onActivate($event) {
    this._scrollService.setToZero();
  }



}
