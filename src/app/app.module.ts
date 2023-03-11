import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";

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
import {RouterModule} from "@angular/router";
import {LoginAdminComponent} from './Components/login/login-admin-page/login-admin.component';
import {LoginVlasnikComponent} from './Components/login/login-vlasnik-page/login-vlasnik.component';
import {LoginGostComponent} from './Components/login/login-gost-page/login-gost.component';
import {RegisterAdminComponent} from './Components/register/register-admin-page/register-admin.component';
import {RegisterGostComponent} from './Components/register/register-gost-page/register-gost.component';
import {RegisterVlasnikComponent} from './Components/register/register-vlasnik-page/register-vlasnik.component';
import {InputFieldComponent} from './Components/input-field/input-field.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordFieldComponent} from './Components/password-field/password-field.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { MojeRezervacijeComponent } from './Components/moje-rezervacije/moje-rezervacije.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LandingPageComponent,
    HomePageComponent,
    ProfileComponent,
    LoginAdminComponent,
    LoginVlasnikComponent,
    LoginGostComponent,
    RegisterAdminComponent,
    RegisterGostComponent,
    RegisterVlasnikComponent,
    InputFieldComponent,
    PasswordFieldComponent,
    SideNavComponent,
    MojeRezervacijeComponent
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
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
