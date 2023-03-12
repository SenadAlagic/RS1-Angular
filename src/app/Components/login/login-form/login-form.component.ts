import { Component,Input } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginInformacije} from "../../../Helpers/loginInformacije";
import { MojConfig } from 'src/app/MojConfig';
import { AutentifikacijaHelper } from 'src/app/Helpers/autentifikacija';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Input() OwnerGuestAdmin: string="User";
  url:string='';

  constructor(private httpklijent: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  Validiraj() {
    if (this.username.hasError('required'))
      return false;
    if (this.password.hasError('required'))
      return false;
    return true;
  }

  Login() {
    if (!this.Validiraj()){
      //@ts-ignore
      porukaError("Morate unijeti podatke u sva input polja!");
      return;
    }
    let info = {
      username: this.username.value,
      password: this.password.value
    }

    if(this.OwnerGuestAdmin=='owner') {
      this.url=MojConfig.adresa_servera + '/api/Korisnik/LoginVlasnik';
    }
    else if(this.OwnerGuestAdmin=='guest') {
      this.url=MojConfig.adresa_servera + '/api/Korisnik/LoginGost';
    }
    else if(this.OwnerGuestAdmin=='admin') {
      this.url=MojConfig.adresa_servera + '/api/Korisnik/LoginAdmin';
    }

    this.httpklijent.post<LoginInformacije>(this.url, info).subscribe((x: LoginInformacije) => {
      if (x.isLogiran == false) {
        // @ts-ignore
        porukaError("Pogresan username i/ili password");
      } else {
        AutentifikacijaHelper.setLoginInfo(x);
        this.router.navigate(['landingPage']);
        // @ts-ignore
        porukaSuccess("Uspjesno ste se logirali!");
      }
    })
  }
}
