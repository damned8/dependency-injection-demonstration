import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as PostActions from '../actions/post.actions';
import { POST_API_PROVIDE_TOKEN } from 'src/app/utils/api/post-api-provider';
import { Post } from 'src/app/models/post';
import { ApiService } from 'src/app/utils/api/api.service';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadPosts),
      concatMap(() =>
        this.postApi.getAll({}).pipe(
          tap((data) => console.log(data)),
          map((data) => PostActions.loadPostsSuccess({ data })),
          catchError((error) => of(PostActions.loadPostsFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    @Inject(POST_API_PROVIDE_TOKEN)
    private postApi: ApiService<Partial<Post>, Post, Partial<Post>, Post[]>
  ) {}
}
