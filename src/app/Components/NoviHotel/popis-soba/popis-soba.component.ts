import { Component,Output,EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MojConfig} from "../../../MojConfig";
import  {Soba} from "../../../Helpers/soba";

@Component({
  selector: 'app-popis-soba',
  templateUrl: './popis-soba.component.html',
  styleUrls: ['./popis-soba.component.css']
})
export class PopisSobaComponent {
  postojiSoba:boolean;
  rooms:any[]=[];
  currentIndex:any;


  constructor(private router: Router,private httpklijent:HttpClient) {
   }

    areSobeDodane(){
      return this.rooms.length> 0;
    }

    dodajSobu(){
      this.router.navigate(['dodajHotel/addSoba']);
    }

    ngOnInit(){
      this.fetchSobe();
      this.areSobeDodane();
    }

    fetchSobe():void{
      this.httpklijent.get<Soba>(MojConfig.adresa_servera+"/api/Soba/GetAllSoba",MojConfig.http_opcije()).subscribe((x:any) =>{
        this.rooms=x;
        if(this.rooms.length>0){
          this.postojiSoba=true;
        }
        else{
          this.postojiSoba=false;
        }
      });
    }
}
