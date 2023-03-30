import { Component } from '@angular/core';

@Component({
  selector: 'app-dodaj-hotel',
  templateUrl: './dodaj-hotel.component.html',
  styleUrls: ['./dodaj-hotel.component.css']
})
export class DodajHotelComponent {
  hotelInfo={
    basicInfo:{},
    roomInfo:{},
    otherInfo:{},
  }
}
