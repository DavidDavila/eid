import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private page:number = 1;
  private url: string = 'https://electronicid.eu/wp-json/wp/v2/'
  private oldPost;
  public canLoadMorePost : boolean = true;
  public posts: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  public posts$ = this.posts.asObservable();
  public currentPost: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  public currentPost$ = this.currentPost.asObservable();
  constructor(private http: HttpClient) {}
  nextPosts(){
    if(this.canLoadMorePost){
      this.page++;
      this.getPosts()
    }
  }

  canLoadMore(){
    return this.canLoadMorePost;
  }

  getPosts() {
    return this.http.get(this.url + 'posts' + '?status=publish&per_page=' + (this.page === 1? '7' : '8') + '&page=' + this.page)
    .toPromise()
    .then((posts: any) => {
      posts.forEach((post)=>{
        this.getMedia(post);
      })
      this.oldPost = this.posts['_value'];
      this.oldPost = this.oldPost.concat(...posts)
      this.posts.next(this.oldPost);
      return this.oldPost;

    }).catch(err => {
      console.log('err get post -- ', err) ;
      this.page--;
      this.canLoadMorePost = false;
      console.log('this.page -- ', this.page) ;
    });
  }
  getCategories() {
    return this.http.get(this.url + 'categories')
    .toPromise()
    .then((categories: any) => {
      return categories;
    });
  }
  getMedia(post) {
    return this.http.get(this.url + 'media/' + post.featured_media)
    .toPromise()
    .then((media: any) => {
      post.media = media;
    });
  }
  getPostsSticky() {
    /*return this.http.get(this.url + 'posts' + '?status=publish&sticky=true&per_page=3')*/
    return this.http.get(this.url + 'posts' + '?status=publish&per_page=3&page=2')
    .toPromise()
    .then((posts: any) => {
      posts.forEach((post)=>{
        this.getMedia(post);
        post.tags.forEach((tag)=>{
          this.getTags(post,tag);

        })
      })
      return posts;
    });
  }
  getTags(post,tag) {
    return this.http.get(this.url + 'tags/' + tag)
    .toPromise()
    .then((tag: any) => {
      post && post.tagNames? post.tagNames.push({name:tag.name, slug: tag.slug}) : post.tagNames = [{name:tag.name, slug: tag.slug}];
      return post;
    });
  }
}
