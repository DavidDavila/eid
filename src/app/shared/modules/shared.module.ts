import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseWheelTimingDirective } from './../directives/mouse-wheel-timing.directive';
import { FooterComponent } from './../components/footer/footer.component';
import { LanguageComponent } from './../components/language/language.component';
import { SliderComponent } from './../components/slider/slider.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { DomChangeDirective } from '../directives/dom-change.directive';

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule.forRoot(),

  ],
  exports: [
    MouseWheelTimingDirective,
    LottieAnimationViewModule,
    FooterComponent,
    LanguageComponent,
    SliderComponent,
    DomChangeDirective
  ],
  declarations: [MouseWheelTimingDirective, FooterComponent, LanguageComponent, SliderComponent, DomChangeDirective]
})
export class SharedModule { }
