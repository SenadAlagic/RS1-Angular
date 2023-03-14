import { Component,Input } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MojConfig } from 'src/app/MojConfig';
import { Korisnik, Vlasnik } from 'src/app/Helpers/korisnik';
import { AutentifikacijaHelper } from 'src/app/Helpers/autentifikacija';

@Component({
  selector: 'app-moj-profil',
  templateUrl: './moj-profil.component.html',
  styleUrls: ['./moj-profil.component.css']
})
export class MojProfilComponent {

  workingUser:any;
  token:any;
  ovajKorisnik:any;

  ime = new FormControl('', [Validators.required]);
  prezime = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  datumRodjenja = new FormControl(new Date().toLocaleDateString());
  musko = new FormControl(false);
  zensko = new FormControl(false);
  brojTelefona = new FormControl('', [Validators.required]);

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmedPassword = new FormControl('', [Validators.required]);

  brojRacuna = new FormControl('', [Validators.required]);
  brojLicneKarte = new FormControl('', [Validators.required]);

  constructor(private httpklijent:HttpClient, private router:Router) {
  }

  ngOnInit(){

    this.workingUser=localStorage.getItem('Working.user');

    this.token=AutentifikacijaHelper.getLoginInfo();
    this.ProvjeriUlogu();
    console.log(this.ovajKorisnik);
  }

  //OVAJ DIO KODA U NGONINIT I FUNKCIJU ISPOD SAM DODALA DA PROVJERIM ULOGU
  //JER U OVISNOSTI OD NJE CE SE PRIKAZATI ILI NECE BROJ RACUNA I BROJ LICNE KARTE
  //AKO IMA BOLJI NACIN SLOBODNO PROMIJENI
  
  //#TODO POSTAVITI MOJ PROFIL KAO DEFAULTNI KADA SE OTVORI KOMPONENTA PROFILE PAGE

  ProvjeriUlogu(){
    if(this.token.autentifikacijaToken.gost!=null) //niz provjera uloga korisnika
      this.ovajKorisnik=this.token.autentifikacijaToken.gost;
    else if(this.token.autentifikacijaToken.vlasnik!=null)
      this.ovajKorisnik=this.token.autentifikacijaToken.vlasnik;
    else
      this.ovajKorisnik=this.token.autentifikacijaToken.admin;
  }
  

  

}
