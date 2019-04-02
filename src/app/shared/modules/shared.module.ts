import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseWheelTimingDirective } from './../directives/mouse-wheel-timing.directive';
import { FooterComponent } from './../components/footer/footer.component';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule.forRoot(),

  ],
  exports: [
    MouseWheelTimingDirective,
    LottieAnimationViewModule,
    FooterComponent
  ],
  declarations: [MouseWheelTimingDirective, FooterComponent]
})
export class SharedModule { }
