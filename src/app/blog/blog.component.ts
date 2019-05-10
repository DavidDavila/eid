import { Component, OnInit, Inject } from '@angular/core';
import  { BlogService } from './../shared/services/blog.service';


import { PLATFORM_ID } from '@angular/core';
import {isPlatformServer, isPlatformBrowser} from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const POSTS_KEY = makeStateKey('posts');
const STICKY_KEY = makeStateKey('sticky');

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public numberOfPosts: number = 8;
  public posts:Array<any> = [];
  public sticky:Array<any> = [];
  public sections: Array<any> = [];
  public canGoTop: boolean= false;
  public countTimes: number = 0;

  constructor(public _blogService: BlogService, private state: TransferState, @Inject(PLATFORM_ID) private _platformId: Object) {

      this.posts = this.state.get<any>(POSTS_KEY, null);
      !this.posts && this._blogService.getPosts().then( posts => {

        this.state.set<any>(POSTS_KEY, posts);
        this.posts = posts;
        console.log('api', this.posts)
      });
      this._blogService.posts$.subscribe( posts => {
        if(posts.length !== 0 ) {
          this.countTimes++;
          this.canGoTop = true;
          this.posts = posts;
          this.setNumberOfSections()
        }
      })

      this.sticky = this.state.get<any>(STICKY_KEY, null);

      !this.sticky && this._blogService.getPostsSticky().then( stickyPost =>{
        this.state.set<any>(STICKY_KEY, stickyPost);
        console.log('sticky0',stickyPost)
        this.sticky = stickyPost;
      })


  }

  ngOnInit() {
    this._blogService.currentPost.next([])
    this.posts && this.posts.length !== 0 && this._blogService.posts.next(this.posts)
  }
  setNumberOfSections() {
    this.sections = [];
    let res = [];
    let post = [...this.posts]
     while (post.length) {
       let counter  = this.sections.length === 0 ? this.numberOfPosts - 1 : this.numberOfPosts;
       this.sections.push(post.splice(0, counter));
       console.log(counter, this.sections)
     }

     return this.sections;
  }
  setPost(sectionIndex:number, postIndex: number) {
    let data = {
      prev: this.sections[sectionIndex][postIndex-1],
      current: this.sections[sectionIndex][postIndex],
      next: this.sections[sectionIndex][postIndex+1]
    }
    this._blogService.currentPost.next([data])
  }
  goToTop(){
    console.log('goToTop**********')
    var x = document.getElementsByClassName("postsList");  
    var i = document.getElementsByClassName("postsList").length;

    var myElem = x[i-1];
    
    if(myElem){
      myElem.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  onDomChange($event: Event): void {
    console.log('$event');
    console.log($event);
    console.log('canGoTop -- ', this.canGoTop);
    
    if(this.canGoTop && this.countTimes > 1){
      this.goToTop();
      this.canGoTop = false;
    }
  }

}
