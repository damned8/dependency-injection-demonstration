import { Component, Inject, OnInit, Optional } from '@angular/core';
import { BaseComponent } from 'src/app/utils/base-component';
import { POST_CONFIG_TOKEN, PostConfig } from './post.module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent extends BaseComponent<PostConfig> implements OnInit {
  constructor(
    @Optional()
    @Inject(POST_CONFIG_TOKEN)
    protected config: Readonly<PostConfig>
  ) {
    super();
  }

  ngOnInit(): void {}
}
