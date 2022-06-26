import { createAction, props } from '@ngrx/store';

export const loadComments = createAction(
  '[Comment] Load Comments'
);

export const loadCommentsSuccess = createAction(
  '[Comment] Load Comments Success',
  props<{ data: any }>()
);

export const loadCommentsFailure = createAction(
  '[Comment] Load Comments Failure',
  props<{ error: any }>()
);
