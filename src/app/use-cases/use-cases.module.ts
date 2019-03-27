import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseCasesRoutingModule } from './use-cases-routing.module';
import { UseCasesComponent } from './use-cases.component';
import { UsesCasesFilterComponent } from './uses-cases-filter/uses-cases-filter.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    UseCasesRoutingModule
  ],
  declarations: [UseCasesComponent, UsesCasesFilterComponent, ListComponent]
})
export class UseCasesModule { }
