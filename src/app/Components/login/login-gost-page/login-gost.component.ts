import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginInformacije} from "../../../Helpers/loginInformacije";
import {MojConfig} from "../../../MojConfig";
import {AutentifikacijaHelper} from "../../../Helpers/autentifikacija";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-gost-page',
  templateUrl: './login-gost.component.html',
  styleUrls: ['./login-gost.component.css']
})
export class LoginGostComponent {

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
    this.httpklijent.post<LoginInformacije>(MojConfig.adresa_servera + '/api/Korisnik/LoginGost', info).subscribe((x: LoginInformacije) => {
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
