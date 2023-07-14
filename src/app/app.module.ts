import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import { WelcomeComponent } from './pages/home/welcome.component';
import { ContactComponent } from './pages/contact.component';
import { EventsComponent } from './pages/events.component';
import { SponsoredComponent } from './pages/sponsored.component';
import { SponsorsComponent } from './pages/sponsors.component';
import { PrivacyComponent } from './pages/privacy.component';
import { AboutUsComponent } from './pages/about-us.component';
import { PrstartComponent } from './pages/prstart.component';

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
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
