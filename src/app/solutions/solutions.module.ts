import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SolutionsRoutingModule } from './solutions-routing.module';
import { SmileIdComponent } from './smile-id/smile-id.component';
import { SolutionsComponent } from './solutions.component';
import { SharedModule } from './../shared/modules/shared.module';
import { SignatureIdComponent } from './signature-id/signature-id.component';
import { CircleImgComponent } from './smile-id/circle-img/circle-img.component';
import { VideoIdComponent } from './video-id/video-id.component';
import { CircleImgViComponent } from './video-id/circle-img-vi/circle-img-vi.component';

@NgModule({ 
  imports: [
    CommonModule,
    SharedModule,
    SolutionsRoutingModule
  ],
  declarations: [SmileIdComponent, SolutionsComponent, CircleImgComponent, SignatureIdComponent, VideoIdComponent, CircleImgViComponent]
})
export class SolutionsModule { }
