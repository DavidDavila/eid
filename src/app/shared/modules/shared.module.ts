import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseWheelTimingDirective } from './../directives/mouse-wheel-timing.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MouseWheelTimingDirective],
  declarations: [MouseWheelTimingDirective]
})
export class SharedModule { }
