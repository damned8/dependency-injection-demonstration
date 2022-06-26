import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';

export const POST_CONFIG_TOKEN = new InjectionToken('POST_CONFIG_TOKEN');
export interface PostConfig {}
@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule],
  exports: [PostComponent]
})
export class PostModule {
  static forRoot(config: PostConfig): ModuleWithProviders<PostModule> {
    return {
      ngModule: PostModule,
      providers: [{ provide: POST_CONFIG_TOKEN, useValue: config }],
    };
  }
}
