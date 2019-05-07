import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service'

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.scss']
})
export class UseCasesComponent implements OnInit {

  constructor(
  	private _scrollService: ScrollService
  ) { }

  ngOnInit() {
  	this._scrollService.changesection(true);
  }

}
