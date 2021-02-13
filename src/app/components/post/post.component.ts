import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../models/IPost';
import { PostsService } from 'src/app/shared-services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: IPost;

  comment: string;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  addNewComment() {
    this.postService.addComment(this.comment, this.post.title, this.post.id)

    this.comment = '';
  }

  likePost() {
    this.postService.likePost(this.post);
  }

}
