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
  brojTelefona = new FormControl('', [Validators.required]);
  spol = new FormControl('', [Validators.required]);

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmedPassword = new FormControl('', [Validators.required]);

  brojRacuna = new FormControl('', [Validators.required]);
  brojLicneKarte = new FormControl('', [Validators.required]);

  disable=true;
  constructor(private httpklijent:HttpClient, private router:Router) {
  }

  ngOnInit(){
    //@ts-ignore
    this.workingUser=JSON.parse(localStorage.getItem("Working-user"));
    console.log(this.workingUser);

    this.ime.setValue(this.workingUser.korisnik.ime);
    this.prezime.setValue(this.workingUser.korisnik.prezime);
    this.email.setValue(this.workingUser.korisnik.email);
    this.datumRodjenja.setValue(this.workingUser.korisnik.datum_rodjenja);
    this.brojTelefona.setValue(this.workingUser.korisnik.broj_telefona);
    this.brojRacuna.setValue(this.workingUser.brojBankovnogRacuna);
    this.brojLicneKarte.setValue(this.workingUser.brojLicneKarte);
    this.spol.setValue(this.workingUser.korisnik.spol);    
  }

  //OVAJ DIO KODA U NGONINIT I FUNKCIJU ISPOD SAM DODALA DA PROVJERIM ULOGU
  //JER U OVISNOSTI OD NJE CE SE PRIKAZATI ILI NECE BROJ RACUNA I BROJ LICNE KARTE
  //AKO IMA BOLJI NACIN SLOBODNO PROMIJENI
  
  //#TODO POSTAVITI MOJ PROFIL KAO DEFAULTNI KADA SE OTVORI KOMPONENTA PROFILE PAGE


  

}
