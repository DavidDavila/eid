import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service'
@Component({
  selector: '[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public scrollZero: boolean = true;
  constructor(private _scrollService: ScrollService) { }

  ngOnInit() {
    this._scrollService.section$.subscribe( val=>{
      this.scrollZero = val;
    })
  }

}
