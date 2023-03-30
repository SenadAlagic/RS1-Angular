import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moji-objekti',
  templateUrl: './moji-objekti.component.html',
  styleUrls: ['./moji-objekti.component.css']
})
export class MojiObjektiComponent {

  constructor(private router:Router){}

  toAddHotel(){
    this.router.navigate(['/dodajHotel/addHotel',0]);
  }
}
