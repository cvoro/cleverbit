import { createSelector } from "@ngrx/store";
import { IAppState } from '../../models/IAppState';
import { IPost } from '../../models/IPost';

export const getPosts = createSelector(
    (state: IAppState) => state.PostState.posts,
    (posts: IPost[]) => posts
  );

  export const getLikes = createSelector(
    (state: IAppState) => state.PostState.user.likes,
    (likes) => likes
  );

  export const getCommentsNumber = createSelector(
    (state: IAppState) => state.PostState.user.comments,
    (comments) => comments.length
  );

  export const getComments = createSelector(
    (state: IAppState) => state.PostState.user.comments,
    (comments) => comments
  );

  export const checkForNewPosts = createSelector(
    (state: IAppState) => state.PostState.newPosts,
    (newPosts) => newPosts
  );