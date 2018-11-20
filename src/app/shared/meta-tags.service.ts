import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(
    public meta: Meta,
    public titleMeta: Title,
  ) { }
  setTitle(title) {
    this.titleMeta.setTitle(title);

  }
  setMetaTags(tags) {
    this.meta.updateTag(tags);
  }
}
