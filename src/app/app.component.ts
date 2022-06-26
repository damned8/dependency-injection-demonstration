import { Component, Inject } from '@angular/core';
import { ApiService } from './utils/api/api.service';
import { POST_API_PROVIDE_TOKEN } from './utils/post-api-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(POST_API_PROVIDE_TOKEN) api: ApiService<any, any, any, any>) {
    console.log(api)
  }
}
