import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { loadPosts } from 'src/app/data/post/actions/post.actions';
import { selectPostState } from 'src/app/data/post/selectors/post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts$ = this.store
    .select(selectPostState)
    .pipe(tap((v) => console.log(v)));
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
