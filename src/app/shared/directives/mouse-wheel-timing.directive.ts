import { Directive, Output, EventEmitter,Input, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Directive({
  selector: '[mouseWheelTiming]'
})
export class MouseWheelTimingDirective {
  @Input('disableScroll') disableScroll:boolean;
  @Output() mouseFinish: EventEmitter<number> = new EventEmitter<number>();
  private isMoving:boolean = false;
  private scrollEvent$;
  constructor(private el: ElementRef) {
    this.scrollEvent$ = fromEvent(this.el.nativeElement,
    'mousewheel').subscribe((e: any) => {
      console.log(this.disableScroll)
      if (this.isMoving || this.disableScroll) return;
      this.mouseFinish.emit(e);
      this.isMoving = true;
      setTimeout((()=> {
         this.isMoving = false;
      }).bind(this),1200);
    });

    this.scrollEvent$ = fromEvent(this.el.nativeElement,
    'DOMMouseScroll').subscribe((e: any) => {
      if (this.isMoving) return;
      this.mouseFinish.emit(e);
      this.isMoving = true;
      setTimeout((()=> {
         this.isMoving = false;
      }).bind(this),1200);
    });
  }

}
