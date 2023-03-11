import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from "@angular/material/core";
import {MatTooltipModule} from '@angular/material/tooltip';


import {AppRoutingModule} from './app-routing.module';
import {NotFoundComponent} from './Components/not-found-page/not-found.component';
import {LandingPageComponent} from './Components/landing-page/landing-page.component';
import {HomePageComponent} from './Components/home-page/home-page.component';
import {ProfileComponent} from './Components/profile-page/profile.component';
import {DashboardVlasnikComponent} from './Components/dashboard-page/dashboard-vlasnik.component';
import {RouterModule} from "@angular/router";
import {LoginAdminComponent} from './Components/login/login-admin-page/login-admin.component';
import {LoginVlasnikComponent} from './Components/login/login-vlasnik-page/login-vlasnik.component';
import {LoginGostComponent} from './Components/login/login-gost-page/login-gost.component';
import {RegisterAdminComponent} from './Components/register/register-admin-page/register-admin.component';
import {RegisterGostComponent} from './Components/register/register-gost-page/register-gost.component';
import {RegisterVlasnikComponent} from './Components/register/register-vlasnik-page/register-vlasnik.component';
import {InputFieldComponent} from './Components/input-field/input-field.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OpeningPageComponent } from './Components/opening-page/opening-page.component';
import { LoginOpeningPageComponent } from './Components/login-opening-page/login-opening-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LandingPageComponent,
    HomePageComponent,
    ProfileComponent,
    DashboardVlasnikComponent,
    LoginAdminComponent,
    LoginVlasnikComponent,
    LoginGostComponent,
    RegisterAdminComponent,
    RegisterGostComponent,
    RegisterVlasnikComponent,
    InputFieldComponent,
    OpeningPageComponent,
    LoginOpeningPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatTooltipModule,
    RouterModule.forRoot(
      [
        {path: '', component: OpeningPageComponent},
        //{path: '', component: HomePageComponent},
        {path: 'loginGost', component: LoginGostComponent},
        {path: 'loginVlasnik', component: LoginVlasnikComponent},
        {path: '**', component: NotFoundComponent}
      ]),
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
