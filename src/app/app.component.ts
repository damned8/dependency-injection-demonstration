import { Component, Inject, OnInit } from '@angular/core';
import { Post } from './models/post';
import { ApiService } from './utils/api/api.service';
import { POST_API_PROVIDE_TOKEN } from './utils/api/post-api-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(POST_API_PROVIDE_TOKEN)
    private postApi: ApiService<Partial<Post>, Post, Partial<Post>, Post[]>
  ) {}
  ngOnInit(): void {
    this.postApi.getAll({}).subscribe(v => console.log(v))
  }
}
