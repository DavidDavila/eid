import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionsComponent } from './solutions.component';
import { SmileIdComponent } from './smile-id/smile-id.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'smileId'
  },
  {
    path: 'smileId',
    component: SmileIdComponent
  },
  {
    path: '**',
    redirectTo: 'smileId',
    pathMatch: 'full'
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }