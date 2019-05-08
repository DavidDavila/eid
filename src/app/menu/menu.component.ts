import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service';
import {Router} from "@angular/router";

@Component({
  selector: '[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public scrollZero: boolean = true;
  public wasClicked: boolean = false;
  public showSubmenu: boolean = false;

  @HostListener('document:click', ['$event']) 
  clickout(event) {
    if( !this.eRef.nativeElement.contains(event.target) && this.wasClicked) {
      this.onClick();
    } 
  }

  constructor(
    private router: Router,
    private _scrollService: ScrollService, 
    private eRef: ElementRef
  ) { }

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
    console.log('mouseOver -- ', this.showSubmenu);
  }


  closeSubmenu(){
    this.showSubmenu = false;
  }

  closeAndGo(ev){
    this.onClick();
    let goTo = ev.currentTarget.getAttribute('href');
    this.router.navigate([goTo]);
  }
}
