import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/IPost';
import { PostsService } from '../../shared-services/posts.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAppState } from '../../models/IAppState';
import { Store, select } from '@ngrx/store';
import { getPosts } from '../../store/selectors/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<IPost[]>;

  constructor(private postsService: PostsService, private store: Store<IAppState>) {
    this.posts$ = this.store.pipe(select(getPosts));
   }

  ngOnInit() {
  }

}
