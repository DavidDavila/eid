import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseWheelTimingDirective } from './../directives/mouse-wheel-timing.directive';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule.forRoot(),

  ],
  exports: [
    MouseWheelTimingDirective,
    LottieAnimationViewModule
  ],
  declarations: [MouseWheelTimingDirective]
})
export class SharedModule { }
