import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostModule as PostComponentModule } from '../../ui/components/post/post.module';
import { POST_API_PROVIDER } from 'src/app/utils/api/post-api-provider';
import { PostListComponent } from './components/post-list/post-list.component';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from 'src/app/data/post/effects/post.effects';
@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    PostComponentModule,
    EffectsModule.forFeature([PostEffects]),
  ],
  providers: [POST_API_PROVIDER],
})
export class PostModule {}
