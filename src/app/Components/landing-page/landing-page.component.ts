import { Component } from '@angular/core';
import {AutentifikacijaHelper} from "../../Helpers/autentifikacija";
import {Router} from "@angular/router";
import {MojConfig} from "../../MojConfig";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private httpklijent:HttpClient, private router:Router) {
  }

  ngOnInit(){
  }
}
