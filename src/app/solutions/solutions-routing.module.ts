import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionsComponent } from './solutions.component';
import { SignatureIdComponent } from './signature-id/signature-id.component';
import { SmileIdComponent } from './smile-id/smile-id.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'signatureId'
  },
  {
    path: 'smileId',
    component: SmileIdComponent
  },
  {
    path: 'signatureId',
    component: SignatureIdComponent
  },
  {
    path: '**',
    redirectTo: 'signatureId',
    pathMatch: 'full'
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }
