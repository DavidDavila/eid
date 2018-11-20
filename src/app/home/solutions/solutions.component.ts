import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../shared/services/home.service';
@Component({
  selector: '[app-solutions]',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  constructor(
    private _homeService: HomeService ) {
    this._homeService.section$.subscribe( val=>{

    });
  }

  ngOnInit() {
  }

}
