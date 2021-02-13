import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared-services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments$: any;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.comments$ = this.postsService.comments$;
  }

}
