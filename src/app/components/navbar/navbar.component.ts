import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared-services/posts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  likes$: any;
  commentsNumber$: any;
  newPosts$: any;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.likes$ = this.postsService.likes$;
    this.commentsNumber$ = this.postsService.commentsNumber$;
    this.newPosts$ = this.postsService.newPosts$;
  }

  getNewPosts() {
    this.postsService.getPosts();
  }

}
