import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service'
@Component({
  selector: '[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public scrollZero: boolean = true;
  public wasClicked: boolean = false;
  public showSubmenu : boolean = false;
  constructor(private _scrollService: ScrollService) { }

  ngOnInit() {
    this._scrollService.section$.subscribe( val=>{
      this.scrollZero = val;
      this.wasClicked = false;
      this.showSubmenu = false;
 
      // this.scrollZero && (this.wasClicked = false)
    })
  }

  onClick() {
    this.wasClicked = !this.wasClicked;
    this.showSubmenu = false;
  }

  mouseOver(event){
    this.showSubmenu = (event.target.className == 'show') ? true : false;
    console.log('mouseOver -- ', this.showSubmenu );
  }

  closeSubmenu(){
    this.showSubmenu = false;
  }

}
