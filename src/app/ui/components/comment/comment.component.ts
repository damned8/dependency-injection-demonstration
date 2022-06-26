import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { BaseComponent } from 'src/app/utils/base-component';
import { COMMENT_CONFIG_TOKEN, CommentConfig } from './comment.module';

@Component({
  selector: 'article[app-comment]',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent
  extends BaseComponent<CommentConfig>
  implements OnInit
{
  @Input('app-comment') inputConfig?: CommentConfig;

  constructor(
    @Optional()
    @Inject(COMMENT_CONFIG_TOKEN)
    protected config: Readonly<CommentConfig>
  ) {
    super();
  }

  ngOnInit(): void {}
}
