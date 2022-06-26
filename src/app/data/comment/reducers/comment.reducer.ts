import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as CommentActions from '../actions/comment.actions';

export const commentFeatureKey = 'comment';


export interface State extends  EntityState<Comment> {

}

export const initialState: State = {
  ids: [],
  entities: {}
};

export const adapter: EntityAdapter<Comment> = createEntityAdapter<Comment>();


export const reducer = createReducer(
  initialState,

  on(CommentActions.loadComments, state => state),
  on(CommentActions.loadCommentsSuccess, (state, action) => state),
  on(CommentActions.loadCommentsFailure, (state, action) => state),

);
