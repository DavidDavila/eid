import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { BlogService } from '../shared/services/blog.service';
import { PostComponent } from './post/post.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
  ],
  declarations: [BlogComponent, PostComponent, BlogCategoriesComponent],
  providers:[
    BlogService
  ]
})
export class BlogModule { }
