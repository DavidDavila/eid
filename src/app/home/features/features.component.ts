import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../shared/services/home.service';

@Component({
  selector: '[app-features]',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
	public section:number;
  constructor(
		private _homeService: HomeService ) {
		this._homeService.section$.subscribe( val=>{
			this.section = val
		});
  }

  ngOnInit() {
  }

}
