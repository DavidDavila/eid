import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private step: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public step$ = this.step.asObservable();
  constructor() { }
  setStep(number: number) {
    this.step.next(number);
  }
}
