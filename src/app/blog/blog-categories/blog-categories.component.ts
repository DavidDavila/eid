import { Component, OnInit, Inject } from '@angular/core';
import  { BlogService } from './../../shared/services/blog.service';


import { PLATFORM_ID } from '@angular/core';
import {isPlatformServer, isPlatformBrowser} from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const CATEGORIES_KEY = makeStateKey('catgegories');

@Component({
  selector: '[app-blog-categories]',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit {
  public categories:Array<any> = [];

  constructor(public _blogService: BlogService, private state: TransferState, @Inject(PLATFORM_ID) private _platformId: Object) {

    this.categories = this.state.get<any>(CATEGORIES_KEY, null);
    !this.categories && this._blogService.getCategories().then(categories =>{
      this.state.set<any>(CATEGORIES_KEY, categories);
      this.categories = categories;
    })
  }

  ngOnInit() {
  }

}
