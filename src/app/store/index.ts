import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { PostsReducer } from './reducers/posts.reducer';
import { IAppState } from '../models/IAppState';


export const reducers: ActionReducerMap<IAppState> = {
    PostState: PostsReducer
};
export const metaReducers: MetaReducer<IAppState>[] = [];