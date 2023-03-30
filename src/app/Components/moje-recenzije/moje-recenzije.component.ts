import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../MojConfig";

@Component({
  selector: 'app-moje-recenzije',
  templateUrl: './moje-recenzije.component.html',
  styleUrls: ['./moje-recenzije.component.css']
})
export class MojeRecenzijeComponent {
  displayedColumns: string[] = ['hotel', 'rating', 'comment'];
  dataSource = [];

  constructor(private httpklijent: HttpClient) {
  }
  ngOnInit()
  {
    let gostId=JSON.parse(localStorage.getItem("Working-user")||"").id;
    this.httpklijent.get(MojConfig.adresa_servera+'/api/Korisnik/GetRecenzijeByGostId?gostId='+gostId).subscribe((x:any)=>{
      this.dataSource=x;
      }
    )
  }
}
