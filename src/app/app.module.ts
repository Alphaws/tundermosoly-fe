import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {WelcomeComponent} from './pages/home/welcome.component';
import {ContactComponent} from './pages/contact.component';
import {EventsComponent} from './pages/events.component';
import {SponsoredComponent} from './pages/sponsored.component';
import {SponsorsComponent} from './pages/sponsors.component';
import {PrivacyComponent} from './pages/privacy.component';
import {AboutUsComponent} from './pages/about-us.component';
import {PrstartComponent} from './pages/prstart.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    EventsComponent,
    SponsoredComponent,
    SponsorsComponent,
    PrivacyComponent,
    AboutUsComponent,
    PrstartComponent
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'hu',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
