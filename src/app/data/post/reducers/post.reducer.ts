import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from '../actions/post.actions';

export const postFeatureKey = 'post';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(PostActions.loadPosts, state => state),
  on(PostActions.loadPostsSuccess, (state, action) => state),
  on(PostActions.loadPostsFailure, (state, action) => state),

);
