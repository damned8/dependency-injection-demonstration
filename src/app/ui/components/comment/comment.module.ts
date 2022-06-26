import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';

export const COMMENT_CONFIG_TOKEN = new InjectionToken('COMMENT_CONFIG_TOKEN');
export interface CommentConfig {}
@NgModule({
  declarations: [CommentComponent],
  imports: [CommonModule],
  exports: [CommentComponent],
})
export class CommentModule {
  static forRoot(config: CommentConfig): ModuleWithProviders<CommentModule> {
    return {
      ngModule: CommentModule,
      providers: [{ provide: COMMENT_CONFIG_TOKEN, useValue: config }],
    };
  }
}
