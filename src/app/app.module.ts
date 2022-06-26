import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';

export const ANIMAL_API_INJECTION_TOKEN = new InjectionToken(
  'ANIMAL_API_INJECTION_TOKEN'
);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: ANIMAL_API_INJECTION_TOKEN,
      useFactory: (httpClient: HttpClient) =>
        new ApiService<any, any>(httpClient),
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
