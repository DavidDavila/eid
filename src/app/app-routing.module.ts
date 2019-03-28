import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
    path: '',
    component: HomeComponent
	},
  { path: 'solutions', loadChildren: './solutions/solutions.module#SolutionsModule'},
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  { path: 'use-cases', loadChildren: './use-cases/use-cases.module#UseCasesModule'},

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }


