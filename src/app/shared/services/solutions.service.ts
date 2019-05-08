import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScrollService } from '../../shared/services/scroll.service';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {
  private section: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public section$ = this.section.asObservable();
  constructor(private _scrollService: ScrollService) { }
  setsection(number: number) {
    this.section.next(number);
    this._scrollService.changesection(number)
  }
}
