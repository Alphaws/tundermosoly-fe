import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./pages/home/welcome.component";
import {ContactComponent} from "./pages/contact.component";
import {EventsComponent} from "./pages/events.component";
import {PrivacyComponent} from "./pages/privacy.component";
import {SponsorsComponent} from "./pages/sponsors.component";
import {SponsoredComponent} from "./pages/sponsored.component";
import {AboutUsComponent} from "./pages/about-us.component";
import {PrstartComponent} from "./pages/prstart.component";
import {PageNotFoundComponent} from "./pages/error/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'events', component: EventsComponent},
      {path: 'sponsored', component: SponsoredComponent},
      {path: 'sponsors', component: SponsorsComponent},
      {path: 'adatvedelem', component: PrivacyComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'prstart', component: PrstartComponent},
      {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
