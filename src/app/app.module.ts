import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, inject, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { AppRoutingModule } from './app-routing.module';
import { POST_API_PROVIDER } from './utils/api/post-api-provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    // EffectsModule.forRoot([]),
    // StoreRouterConnectingModule.forRoot(),
    // EntityDataModule.forRoot(entityConfig),
  ],
  bootstrap: [AppComponent],
  providers: [POST_API_PROVIDER],
})
export class AppModule {}
