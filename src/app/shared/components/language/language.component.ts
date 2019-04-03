import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  public active: string = 'EN'
  @ViewChild('borders') borders: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  mouseMove($event) {
    if ($event.target.tagName === 'A') {
      this.borders.nativeElement.style.left = $event.target.parentElement.offsetLeft + 'px';
    }
  }
  mouseleave() {
    let active = document.getElementsByClassName('active')[0]
    this.borders.nativeElement.style.left = active.parentElement.offsetLeft + 'px';
  }
}
