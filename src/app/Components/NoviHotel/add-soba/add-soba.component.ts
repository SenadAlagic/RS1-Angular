import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink,ActivatedRoute } from '@angular/router';
import { DodajSobuComponent } from '../dodaj-sobu/dodaj-sobu.component';

@Component({
  selector: 'app-add-soba',
  templateUrl: './add-soba.component.html',
  styleUrls: ['./add-soba.component.css']
})
export class AddSobaComponent {
  contentDalje:string="Dalje";
  opsteInfoFormData: any;

  @ViewChild (DodajSobuComponent) dodajSobuComponent:DodajSobuComponent;

  title:string;
  hotel:any={};
  currentIndex:number=0;
  
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){
    this.SectionHeading();
  }

  SectionHeading(){
    if(this.currentIndex==0){
      this.title='Opšte informacije o sobi';
      this.contentDalje='Dalje';
    }
    else if(this.currentIndex==1){
      this.title='Detalji sobe';
      this.contentDalje='Dalje';
    }
    else if(this.currentIndex==2){
      this.title='Dodavanje slika';
      this.contentDalje='Završi';
    }
  }

  onNext() {
    if(this.currentIndex==0){
      this.dodajSobuComponent.onNext();
      this.currentIndex++;
    }
    else if(this.currentIndex==1){
      this.currentIndex++;
    }
    else if(this.currentIndex==2){
      this.spremiSobuUBazu();
      this.router.navigate(["dodajHotel/addHotel",2]);
    }
    
     this.SectionHeading();
  }


  onBack(){
    if(this.currentIndex==0){
      this.router.navigate(["dodajHotel/addHotel",2]);
    }
    else{
      this.currentIndex--;
    }
    this.SectionHeading();
  }

  spremiSobuUBazu(){

  }

  // "naziv": "string",
  // "opis": "string",
  // "hotelID": 0,
  // "sobaDetaljiID": 0,
  // "kapacitet": 0,
  // "brojKreveta": 0,
  // "brojKrevetaZaJednuOsobu": 0,
  // "brojKrevetaNaSprat": 0,
  // "brojBracnihKreveta": 0,
  // "mogucnostDodavanjaDjecijegKreveta": true,
  // "ukupnaCijena": 0
}
