import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MojConfig} from "../../../MojConfig";

@Component({
  selector: 'app-register-admin-page',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {

  constructor(private httpklijent: HttpClient, private router: Router) {
  }

  ime = new FormControl('', [Validators.required]);
  prezime = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  datumRodjenja = new FormControl(new Date().toLocaleDateString());
  musko = new FormControl(false);
  zensko = new FormControl(false);

  brojTelefona = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  passwordConfirm = new FormControl('', [Validators.required])

  Validiraj() {
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
    if (this.password.value != this.passwordConfirm.value) {
      // @ts-ignore
      porukaError("Lozinke nisu identicne, molimo ponovite unos");
      return false;
    }
    return true;
  }

  Registracija() {
    if (!this.Validiraj())
      return;

    let spolNovi = "Zenski";
    if (this.musko)
      spolNovi = "Muski";
    let novi = {
      ime: this.ime.value,
      prezime: this.prezime.value,
      email: this.email.value,
      datumRodjenja: this.datumRodjenja.value,
      spol: spolNovi,
      brojTelefona: this.brojTelefona.value,
      username: this.username.value,
      password: this.password.value,
    };
    this.httpklijent.post(MojConfig.adresa_servera + '/api/Korisnik/RegistracijaAdmin', novi).subscribe(x => {
      if (x == null) {
        // @ts-ignore
        porukaError("Postoji korisnicki nalog sa tim username");
      } else {
        this.router.navigate(["dashboard"]);
        // @ts-ignore
        porukaSuccess("Upjesno ste se registrirali");
      }
    });
  }
}
