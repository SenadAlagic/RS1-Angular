import { Component } from '@angular/core';
import {AutentifikacijaHelper} from "../../Helpers/autentifikacija";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor() {
  }
  token:any;
  workingUser:any;

  ngOnInit(){
    this.token=AutentifikacijaHelper.getLoginInfo();
    this.ProvjeriUlogu();
    localStorage.setItem('Working-user', JSON.stringify(this.workingUser));
  }
  ProvjeriUlogu(){
    if(this.token.autentifikacijaToken.gost!=null) //niz provjera uloga korisnika
      this.workingUser=this.token.autentifikacijaToken.gost;
    else if(this.token.autentifikacijaToken.vlasnik!=null)
      this.workingUser=this.token.autentifikacijaToken.vlasnik;
    else
      this.workingUser=this.token.autentifikacijaToken.admin;
  }
  NaProfil()
  {

  }
  Logout()
  {

  }
}
