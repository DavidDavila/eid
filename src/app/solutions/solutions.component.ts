import { Component, OnInit } from '@angular/core';
import { SolutionsService } from './../shared/services/solutions.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  public btnClass: any;

  constructor(
  	private _solutionsService: SolutionsService 
  ) { 
  	this._solutionsService.section$.subscribe( val=>{
  	  this.btnClass = val > 0 ? 'visible' : '';
  	});
  }

  ngOnInit() {
  }



}
