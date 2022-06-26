import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from 'src/app/ui/components/post/post.component';
import { PostModule } from 'src/app/ui/components/post/post.module';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [{ path: '', component: PostListComponent }];

@NgModule({
  imports: [PostModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
