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
  urediSpremi:boolean=true;

  ime = new FormControl('', [Validators.required]);
  prezime = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  datumRodjenja = new FormControl(new Date().toLocaleDateString());
  brojTelefona = new FormControl('', [Validators.required]);
  spol = new FormControl('', [Validators.required]);
  brojRacuna = new FormControl('', [Validators.required]);
  brojLicneKarte = new FormControl('', [Validators.required]);

  constructor(private httpklijent:HttpClient, private router:Router) {
  }

  promijeniStanje(){
    this.urediSpremi=!this.urediSpremi;
    this.disejbluj();
  }

  disejbluj(){
    if(this.urediSpremi==true){
      this.ime.disable();
      this.prezime.disable();
      this.email.disable();
      this.datumRodjenja.disable();
      this.brojTelefona.disable();
      this.spol.disable();
      this.brojRacuna.disable();
      this.brojLicneKarte.disable();
    }
    else{
      this.ime.enable();
      this.prezime.enable();
      this.email.enable();
      this.datumRodjenja.enable();
      this.brojTelefona.enable();
      this.spol.enable();
      this.brojRacuna.enable();
      this.brojLicneKarte.enable();
    }
  }

  setujVrijednosti(){
    this.ime.setValue(this.workingUser.korisnik.ime);
    this.prezime.setValue(this.workingUser.korisnik.prezime);
    this.email.setValue(this.workingUser.korisnik.email);
    this.datumRodjenja.setValue(this.workingUser.korisnik.datum_rodjenja);
    this.brojTelefona.setValue(this.workingUser.korisnik.broj_telefona);
    this.brojRacuna.setValue(this.workingUser.brojBankovnogRacuna);
    this.brojLicneKarte.setValue(this.workingUser.brojLicneKarte);
    this.spol.setValue(this.workingUser.korisnik.spol);    
  }

  ngOnInit(){
    //@ts-ignore
    this.workingUser=JSON.parse(localStorage.getItem("Working-user"));
    //console.log(this.workingUser);
    this.setujVrijednosti();
    this.disejbluj();
  }
}
