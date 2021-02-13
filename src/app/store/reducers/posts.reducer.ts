import { createReducer, on } from '@ngrx/store';
import { addComment, addNewPost, likePost, setNewPostsStatus } from '../actions/posts.actions';
import cloneDeep from 'lodash/cloneDeep';
import { IPostState } from '../../models/IAppState';

export const initialState = {
    posts: [
    {
      title: 'Great news',
      description: 'This is first random description',
      comments: [{
        description: "this is first comment",
        dateCreated: new Date(),
        postID: 1
      }],
      likes: 3,
      id: 1
    },
    {
      title: 'Another news',
      description: 'This is second random description',
      comments: [{
        description: "this is second comment",
        dateCreated: new Date(),
        postID: 2
      }],
      likes: 2,
      id: 2
    }
  ],
  user: {
    comments: [],
    likes: 0
  },
  newPosts: false
};


const reducer = createReducer(
    initialState,
    on(addComment, (state, { title, description, id }) => {
        let posts = cloneDeep(state.posts);
        posts.forEach(post => {
            if(post.id === id) {
                post.comments.push({
                    description: description,
                    dateCreated: new Date(),
                    postID: post.id
                })
            }
        });
        let comments = cloneDeep(state.user.comments);
        comments.push({
            title: title,
            description: description,
            id: id
        })
        return {...state, posts: posts, user: {...state.user, comments: comments} }
    }),
    on(addNewPost, (state, { post }) => ({
        ...state,
        posts: [...state.posts, post],
        newPosts: true
    })),
    on(likePost, (state, { post }) => {
      let posts = cloneDeep(state.posts).map(element => {
          if (element.id === post.id) {
              element.likes++;
          }
          return element;
      });
      let likes = cloneDeep(state.user.likes);
      likes += 1;
      return {...state, posts: posts, user: {...state.user, likes: likes }};
    }),
    on(setNewPostsStatus, (state, { newPosts }) => {
      return {...state, newPosts: newPosts };
    }),
  );

export function PostsReducer(state: IPostState, action): IPostState {
  return reducer(state, action);
}
