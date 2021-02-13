import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../models/IAppState';
import { getPosts } from '../store/actions/posts.actions';
import * as postActions from '../store/actions/posts.actions';
import { getLikes, getComments, getCommentsNumber, checkForNewPosts } from '../store/selectors/posts.selectors';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts$: Observable<any>;
  likes$: Observable<any>;
  comments$: Observable<any>;
  commentsNumber$: Observable<any>;
  newPosts$: Observable<any>;

  lastCheck = false;
  constructor( private store: Store<IAppState>) {
    this.posts$ = this.store.pipe(select(getPosts));
    this.commentsNumber$ = this.store.pipe(select(getCommentsNumber));
    this.comments$ = this.store.pipe(select(getComments));
    this.likes$ = this.store.pipe(select(getLikes));
    this.newPosts$ = this.store.pipe(select(checkForNewPosts));

    this.checkForNewPosts();
  }

  getPosts() {
    // call api for getting new posts and save it to store or create effect to handle it
  }

  addComment(description, title, id) {
    this.store.dispatch(postActions.addComment({ description, title, id }));
  }

  addNewPost(post) {
    this.store.dispatch(postActions.addNewPost({ post: post }));
  }

  likePost(post) {
    this.store.dispatch(postActions.likePost({ post: post }));
  }

  checkForNewPosts() {
    setTimeout(() => {
      // call api in real case
      this.lastCheck = true;
      this.store.dispatch(postActions.setNewPostsStatus({ newPosts: this.lastCheck }));
    }, 5000);
  }

}
