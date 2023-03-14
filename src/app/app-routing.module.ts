import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes, RouterLinkActive} from "@angular/router";
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
import {MojeRecenzijeComponent} from "./Components/moje-recenzije/moje-recenzije.component";
import {MojiObjektiComponent} from "./Components/moji-objekti/moji-objekti.component";
import {PoveziKreditnuKarticuComponent} from "./Components/povezi-kreditnu-karticu/povezi-kreditnu-karticu.component";
import {ZahtjeviComponent} from "./Components/zahtjevi/zahtjevi.component";
import {PromijeniLozinkuComponent} from "./Components/promijeni-lozinku/promijeni-lozinku.component";
import {RegisterAdminComponent} from "./Components/register/register-admin-page/register-admin.component";
import { MojProfilComponent } from './Components/moj-profil/moj-profil.component';
import { DodajHotelComponent } from './Components/dodaj-hotel/dodaj-hotel.component';

const routes: Routes = [
  {path: '', component: OpeningPageComponent},
  {path: 'loginGost', component: LoginGostComponent},
  {path: 'loginVlasnik', component: LoginVlasnikComponent},
  {path: 'loginAdmin', component: LoginAdminComponent},
  {path: 'registerGost', component: RegisterGostComponent},
  {path: 'registerVlasnik', component: RegisterVlasnikComponent},
  {path: 'registerAdmin', component: RegisterAdminComponent},
  {path: 'landingPage', component: LandingPageComponent},
  {
    path: 'dashboard', component: ProfileComponent, children: [
      {path: 'mojiObjekti', component: MojiObjektiComponent},
      {path: 'mojeRezervacije', component: MojeRezervacijeComponent},
      {path: 'mojeRecenzije', component: MojeRecenzijeComponent},
      {path: 'kreditnaKartica', component: PoveziKreditnuKarticuComponent},
      {path: 'zahtjevi', component: ZahtjeviComponent},
      {path: 'promijeniLozinku', component: PromijeniLozinkuComponent},
      {path: 'mojProfil', component: MojProfilComponent},
      {path: 'dodajHotel', component: DodajHotelComponent},
    ]
  },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterLinkActive
  ]
})
export class AppRoutingModule {
}
