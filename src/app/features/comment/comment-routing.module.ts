import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentModule } from 'src/app/ui/components/comment/comment.module';

const routes: Routes = [{ path: '', component: CommentModule }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
