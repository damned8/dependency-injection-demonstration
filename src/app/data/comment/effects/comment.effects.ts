import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CommentActions from '../actions/comment.actions';


@Injectable()
export class CommentEffects {

  loadComments$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CommentActions.loadComments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CommentActions.loadCommentsSuccess({ data })),
          catchError(error => of(CommentActions.loadCommentsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
