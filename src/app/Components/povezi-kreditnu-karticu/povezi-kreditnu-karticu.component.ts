import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../MojConfig";

@Component({
  selector: 'app-povezi-kreditnu-karticu',
  templateUrl: './povezi-kreditnu-karticu.component.html',
  styleUrls: ['./povezi-kreditnu-karticu.component.css']
})
export class PoveziKreditnuKarticuComponent {

  regexBrojKartice="([0-9]){4}[ -]?([0-9]){4}[ -]?([0-9]){4}[ -]?([0-9]){4}";
  regexDatumIsteka="([0-1][0-9])\\/(2[0-9])";
  regexCVV="([0-9]){3}";
  kartica:any="";

  constructor(private httpklijent:HttpClient) {
  }
  ngOnInit(){
    let user=localStorage.getItem('Working-user')||"";
    let gostid=JSON.parse(user).korisnikID;
    this.httpklijent.get(MojConfig.adresa_servera+'/api/Korisnik/GetKreditnaKarticaByKorisnikID?korisnikId='+gostid).subscribe((x:any)=>{
      this.kartica=x;
      this.brojKartice.setValue(this.kartica.brojKartice);
      this.datumIsteka.setValue(this.kartica.datumIsteka);
      this.CVV.setValue(this.kartica.cvv);
    })
  }

  brojKartice = new FormControl('', [Validators.required, Validators.pattern(this.regexBrojKartice)]);
  datumIsteka = new FormControl('', [Validators.required, Validators.pattern(this.regexDatumIsteka)]);
  CVV = new FormControl('', [Validators.required, Validators.pattern(this.regexCVV)]);

  DodajKarticu()
  {
    let kartica={
      brojKartice:this.brojKartice.value,
      cvv:this.CVV.value,
      datumIsteka:this.datumIsteka.value
    }
    let user=localStorage.getItem('Working-user')||"";
    let gostid=JSON.parse(user).korisnikID;
    this.httpklijent.post(MojConfig.adresa_servera+'/api/Korisnik/PoveziKarticu?gostId='+gostid, kartica).subscribe((x:any)=>{
      location.reload();
    });
  }
}
