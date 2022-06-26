import { Component, Inject } from '@angular/core';
import { ANIMAL_API_INJECTION_TOKEN } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(ANIMAL_API_INJECTION_TOKEN) api: any) {
    console.log(api.getAll())
  }
}
