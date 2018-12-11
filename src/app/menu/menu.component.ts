import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuOptions: Array<any> = [
    {name:'Solutions',goTo:'solutions'},
    {name:'Developers',goTo:'Developers'},
    {name:'Use cases',goTo:'Use'},
    {name:'Resources',goTo:'Resources'},
    {name:'About',goTo:'About'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
