import { Action, createReducer, on } from '@ngrx/store';
import * as CommentActions from '../actions/comment.actions';

export const commentFeatureKey = 'comment';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(CommentActions.loadComments, state => state),
  on(CommentActions.loadCommentsSuccess, (state, action) => state),
  on(CommentActions.loadCommentsFailure, (state, action) => state),

);
