import { Component, Input } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../../MojConfig";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  @Input() OwnerGuest:string='user';
  showHotelOwnerInfo=this.OwnerGuest=='owner';
  url:any;
  godina:string='';
  novi:any;
  spolNovi:any;
  ruta:any;

  constructor(private httpklijent: HttpClient, private router: Router) {
  }

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

  Validiraj1() {
    this.godina=String(this.datumRodjenja.getRawValue()).substring(11,15);
    if(new Date().getFullYear()-13<parseInt(this.godina))
    {
      return false;
    }
    if (this.email.hasError('required'))
      return false;
    if (this.email.hasError('email'))
      return false;
    if (this.ime.hasError('required'))
      return false;
    if (this.prezime.hasError('required'))
      return false;
    if (this.brojTelefona.hasError('required'))
      return false;
    if (this.username.hasError('required'))
      return false;
    if (this.password.hasError('required'))
      return false;
    if (this.password.value != this.confirmedPassword.value) {
      // @ts-ignore
      porukaError("Lozinke se ne poklapaju, molimo ponovite unos");
      return false;
    }
    if (this.brojRacuna.hasError('required'))
      return false;
    if (this.brojLicneKarte.hasError('required'))
      return false;
    return true;

  }

  Validiraj(){
    this.godina=String(this.datumRodjenja.getRawValue()).substring(11,15);
    if((new Date().getFullYear()-13<parseInt(this.godina))||this.email.hasError('required')||this.ime.hasError('required')||
    this.prezime.hasError('required')||this.brojTelefona.hasError('required')||this.username.hasError('required')||
    this.password.hasError('required')||this.confirmedPassword.hasError('required')){
      //@ts-ignore
      porukaError("Niste unijeli podatke u sva polja");
      return false;
    }
    if(this.OwnerGuest=='owner'){
      if(this.brojRacuna.hasError('required')|| this.brojLicneKarte.hasError('required')){
        //@ts-ignore
        porukaError("Niste unijeli podatke u sva polja");
        return false;
      }
    }
    if (this.password.value != this.confirmedPassword.value) {
      // @ts-ignore
      porukaError("Lozinke se ne poklapaju, molimo ponovite unos");
      return false;
    }
    if (this.email.hasError('email')){
      // @ts-ignore
      porukaError("Neispravan email");
      return false;
    }
    return true;
  }

  Registracija() {
    if (!this.Validiraj())
      return;

    this.spolNovi = "Zenski";
    if (this.musko)
        this.spolNovi = "Muski";

    if(this.OwnerGuest=='owner') {
      this.url=MojConfig.adresa_servera + '/api/Korisnik/RegistracijaVlasnik';
      this.novi={
        ime: this.ime.value,
        prezime: this.prezime.value,
        email: this.email.value,
        datumRodjenja: this.datumRodjenja.value,
        spol: this.spolNovi,
        brojTelefona: this.brojTelefona.value,
        username: this.username.value,
        password: this.password.value,
        brojBankovnogRacuna:this.brojRacuna.value,
        brojLicneKarte:this.brojLicneKarte.value
      };
      this.ruta="loginVlasnik";
    }

    else if(this.OwnerGuest=='guest') {
      this.url=MojConfig.adresa_servera + '/api/Korisnik/RegistracijaGost';
      this.novi = {
        ime: this.ime.value,
        prezime: this.prezime.value,
        email: this.email.value,
        datumRodjenja: this.datumRodjenja.value,
        spol: this.spolNovi,
        brojTelefona: this.brojTelefona.value,
        username: this.username.value,
        password: this.password.value,
      };
      this.ruta="loginGost";
    }

    this.httpklijent.post(this.url, this.novi).subscribe(x => {
      if (x == null) {
        // @ts-ignore
        porukaError("Postoji korisnicki nalog sa tim username");
      } else {
        this.router.navigate([this.ruta]);
        // @ts-ignore
        porukaSuccess("Uspjesno ste se registrirali");
      }
    });
  }
}

