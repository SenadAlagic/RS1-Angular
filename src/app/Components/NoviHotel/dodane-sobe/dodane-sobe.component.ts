import { Component,Input } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MojConfig} from "../../../MojConfig";
import  {Soba} from "../../../Helpers/soba";

@Component({
  selector: 'app-dodane-sobe',
  templateUrl: './dodane-sobe.component.html',
  styleUrls: ['./dodane-sobe.component.css']
})
export class DodaneSobeComponent {
  @Input() rooms:any[]=[];

  // ngOnInit(){
  //   this.fetchSobe();
  //   console.log(this.rooms);
  // }

  // constructor(private httpklijent:HttpClient) {
  // }

  // fetchSobe():void{
  //   this.httpklijent.get<Soba>(MojConfig.adresa_servera+"/api/Soba/GetAllSoba",MojConfig.http_opcije()).subscribe((x:any) =>{

  //     this.rooms=x;
  //     console.log(this.rooms);
  //   }

  //   );

  // }

}
