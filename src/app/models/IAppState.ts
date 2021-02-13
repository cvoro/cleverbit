import { IPost } from './IPost';
export interface IAppState {
    PostState: IPostState;
}

export interface IPostState {
    posts: IPost[],
    newPosts: boolean,
    user: {comments: string, likes: number}
}

