import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginInformacije} from "../../../Helpers/loginInformacije";
import {MojConfig} from "../../../MojConfig";
import {AutentifikacijaHelper} from "../../../Helpers/autentifikacija";

@Component({
  selector: 'app-login-vlasnik-page',
  templateUrl: './login-vlasnik.component.html',
  styleUrls: ['./login-vlasnik.component.css']
})
export class LoginVlasnikComponent {

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
    if (!this.Validiraj())
      return;
    let info = {
      username: this.username.value,
      password: this.password.value
    }
    this.httpklijent.post<LoginInformacije>(MojConfig.adresa_servera + '/api/Korisnik/LoginVlasnik', info).subscribe((x: LoginInformacije) => {
      if (x.isLogiran == false) {
        // @ts-ignore
        porukaError("Pogresan username i/ili password");
      } else {
        AutentifikacijaHelper.setLoginInfo(x);
        this.router.navigate(['dashboard']);
        // @ts-ignore
        porukaSuccess("Uspjesno ste se logirali!");
      }
    })
  }
}
