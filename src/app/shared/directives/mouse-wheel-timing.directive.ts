import { Directive, Output, EventEmitter,Input, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
@Directive({
  selector: '[mouseWheelTiming]'
})
export class MouseWheelTimingDirective {
  @Input('disableScroll') disableScroll:boolean;
  @Input('timeToBlock') timeToBlock: number;
  @Output() mouseFinish: EventEmitter<number> = new EventEmitter<number>();
  private isMoving:boolean;
  private scrollEvent$;
  constructor(private el: ElementRef) {
    this.scrollEvent$ = fromEvent(this.el.nativeElement,
    'mousewheel').subscribe((e: any) => {
      e.stopPropagation();
      e.preventDefault();
      if (this.isMoving || this.disableScroll) return;
      this.mouseFinish.emit(e);
      this.isMoving = true;
      setTimeout((()=> {
         this.isMoving = false;
      }).bind(this), this.timeToBlock || 1200);
    });

    this.scrollEvent$ = fromEvent(this.el.nativeElement,
    'DOMMouseScroll').subscribe((e: any) => {
      e.stopPropagation();
      e.preventDefault();
      if (this.isMoving) return;
      this.mouseFinish.emit(e);
      this.isMoving = true;
      setTimeout((()=> {
         this.isMoving = false;
      }).bind(this), this.timeToBlock || 1200);
    });
  }

}
