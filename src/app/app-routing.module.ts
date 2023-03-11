import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginGostComponent} from "./Components/login/login-gost-page/login-gost.component";
import {LoginVlasnikComponent} from "./Components/login/login-vlasnik-page/login-vlasnik.component";
import {LoginAdminComponent} from "./Components/login/login-admin-page/login-admin.component";
import {RegisterGostComponent} from "./Components/register/register-gost-page/register-gost.component";
import {RegisterVlasnikComponent} from "./Components/register/register-vlasnik-page/register-vlasnik.component";
import {LandingPageComponent} from "./Components/landing-page/landing-page.component";
import {ProfileComponent} from "./Components/profile-page/profile.component";
import {NotFoundComponent} from "./Components/not-found-page/not-found.component";
import {MojeRezervacijeComponent} from "./Components/moje-rezervacije/moje-rezervacije.component";
import {OpeningPageComponent} from "./Components/opening-page/opening-page.component";

const routes: Routes = [
  {path: '', component: OpeningPageComponent},
  {path: 'loginGost', component: LoginGostComponent},
  {path: 'loginVlasnik', component: LoginVlasnikComponent},
  {path: 'loginAdmin', component: LoginAdminComponent},
  {path: 'registerGost', component: RegisterGostComponent},
  {path: 'registerVlasnik', component: RegisterVlasnikComponent},
  {path: 'landingPage', component: LandingPageComponent},
  {
    path: 'dashboard', component: ProfileComponent, children: [
      {path: 'mojeRezervacije', component: MojeRezervacijeComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
