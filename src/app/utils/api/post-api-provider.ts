import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

export const POST_API_PROVIDE_TOKEN = new InjectionToken(
  'POST_API_PROVIDE_TOKEN'
);

export const POST_API_PROVIDER = {
  provide: POST_API_PROVIDE_TOKEN,
  deps: [HttpClient],
  useFactory: (http: HttpClient) =>
    new ApiService<Partial<Post>, Post, Partial<Post>, Post[]>(http, {
      singleApi: (props) => `${environment.postsApi}/${props.id}`,
      pluralApi: (props) => `${environment.postsApi}`,
    }),
};
