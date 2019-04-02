import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SolutionsRoutingModule } from './solutions-routing.module';
import { SmileIdComponent } from './smile-id/smile-id.component';
import { SolutionsComponent } from './solutions.component';
import { SharedModule } from './../shared/modules/shared.module';
import { SignatureIdComponent } from './signature-id/signature-id.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SolutionsRoutingModule
  ],
  declarations: [SmileIdComponent, SolutionsComponent, SignatureIdComponent]
})
export class SolutionsModule { }
