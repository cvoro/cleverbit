import { createAction, props } from '@ngrx/store';
import { IPost } from '../../models/IPost';

export enum ActionTypes {
    addNewPost = '[posts] new post added',
    addPosts = '[posts] add new posts',
    getPosts = '[posts] get posts from API',
    likePost = '[posts] like post',

    addComment = '[posts] new comment added',

    setNewPostsStatus = '[posts] check if there are new posts'
}

export const getPosts = createAction(
    ActionTypes.getPosts
);

export const addPosts = createAction(
    ActionTypes.addPosts,
    props<{posts: IPost[]}>()
);

export const addComment = createAction(
    ActionTypes.addComment,
    props<{description: string, title: string, id: number}>()
);

export const addNewPost = createAction(
    ActionTypes.addNewPost,
    props<{post}>()
);

export const likePost = createAction(
    ActionTypes.likePost,
    props<{post: IPost}>()
);

export const setNewPostsStatus = createAction(
    ActionTypes.setNewPostsStatus,
    props<{newPosts: boolean}>()
);


