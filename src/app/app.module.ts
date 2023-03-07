import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProfilComponent } from './Components/profil/profil.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DashboardVlasnikComponent } from './Components/dashboard-vlasnik/dashboard-vlasnik.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LandingPageComponent,
    HomePageComponent,
    ProfilComponent,
    ProfileComponent,
    DashboardVlasnikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
