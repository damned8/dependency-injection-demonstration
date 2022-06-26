import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./features/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./features/comment/comment.module').then((m) => m.CommentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
