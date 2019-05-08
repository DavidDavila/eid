import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public sectionNumber: number = 0;
  private section: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public section$ = this.section.asObservable();
  constructor() { }
  setToZero() {
    this.sectionNumber = 0;
    this.section.next(true);
  }
  changesection(number) {
    this.sectionNumber = number;
    this.section.next(this.sectionNumber <= 0);
    console.log(this.sectionNumber)
  }
}
