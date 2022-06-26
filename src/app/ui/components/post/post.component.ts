import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { BaseComponent } from 'src/app/utils/base-component';
import { POST_CONFIG_TOKEN, PostConfig } from './post.module';

@Component({
  selector: 'article[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent extends BaseComponent<PostConfig> implements OnInit {
  @Input('app-post') inputConfig?: PostConfig;
  constructor(
    @Optional()
    @Inject(POST_CONFIG_TOKEN)
    protected config: Readonly<PostConfig>
  ) {
    super();
  }

  ngOnInit(): void {
    console.log(this.inputConfig)
  }
}
