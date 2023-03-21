import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientMock } from 'src/core/http-client-mock.service';
import { HttpClientAPI } from 'src/core/http-client-api.service';

const mock = false;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // Instantiate the mock client if mock is true, otherwise instantiate the api client
    {
      provide: HttpClientAPI,
      useClass: mock ? HttpClientMock : HttpClientAPI
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
