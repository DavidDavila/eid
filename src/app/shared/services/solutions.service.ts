import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {
  private section: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public section$ = this.section.asObservable();
  constructor() { }
  setsection(number: number) {
    this.section.next(number);
  }
}
