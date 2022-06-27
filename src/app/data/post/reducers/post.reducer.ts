import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import * as PostActions from '../actions/post.actions';

export const postFeatureKey = 'post';

export interface State extends EntityState<Post> {}

export const initialState: State = {
  ids: [],
  entities: {},
};

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const reducer = createReducer(
  initialState,

  on(PostActions.loadPosts, (state) => state),
  on(PostActions.loadPostsSuccess, (state, action) =>
    adapter.upsertMany(action.data, state)
  ),
  on(PostActions.loadPostsFailure, (state, action) => state)
);
