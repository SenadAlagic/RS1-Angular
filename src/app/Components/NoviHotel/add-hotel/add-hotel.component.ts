import { Component,Input, ViewChild } from '@angular/core';
import { HotelDetaljiComponent } from '../hotel-detalji/hotel-detalji.component';
import { OpsteInformacijeComponent } from '../opste-informacije/opste-informacije.component';
import { Router,ActivatedRoute } from '@angular/router';
import { PopisSobaComponent } from '../popis-soba/popis-soba.component';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../../MojConfig";
import { Hotel } from 'src/app/Helpers/hotel';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  contentDalje:string="Dalje";
  opsteInfoFormData: any;

  @ViewChild (OpsteInformacijeComponent) opsteInfoComponent: OpsteInformacijeComponent;
  @ViewChild (HotelDetaljiComponent) detaljiHotelaComponent: HotelDetaljiComponent;
  @ViewChild (PopisSobaComponent) popisSobaComponent: PopisSobaComponent;

  title:string;
  hotel:any={};
  currentIndex:number=0;
  url:string;
  // sobaPostoji:boolean=this.popisSobaComponent.areSobeDodane();

  constructor(private route: ActivatedRoute,private router:Router,private httpklijent: HttpClient ){ }

  ngOnInit(){
    this.SectionHeading();
    this.route.params.subscribe(params=>{
      this.currentIndex = +params["currentIndex"];
    });
  }

  onNext() {
    if(this.currentIndex==0){
      this.opsteInfoComponent.onNext();
      this.currentIndex++;
    }
    else if(this.currentIndex==1){
      this.detaljiHotelaComponent.onNext();
      this.currentIndex++;
      this.SpremiHotelUBazu();
    }
    this.SectionHeading();
  }

  onBack(){
    this.currentIndex--;
    this.SectionHeading();
  }

  SectionHeading(){
    if(this.currentIndex==0){
      this.title='Opšte informacije';
      this.contentDalje='Dalje';
    }
    else if(this.currentIndex==1){
      this.title='Detalji hotela';
      this.contentDalje='Dalje';
    }
    else if(this.currentIndex==2){
      this.title='Dodavanje soba';
      this.contentDalje='Završi';
    }
  }

  //TODO: ovdje dodati ako postoje sobe vec
  isDisabled(){
    if( this.currentIndex!=2){
      return false;
    }
    else{
      return true;
    }
  }

  SpremiHotelUBazu(){
    //@ts-ignore
    const opsteInfoStorage=JSON.parse(sessionStorage.getItem("opsteInformacijeHotel"));
    //@ts-ignore
    const detaljiHotelaStorage=JSON.parse(sessionStorage.getItem("detaljiHotel"));
    //@ts-ignore
    const slikaStorage= sessionStorage.getItem("jednaSlika");
    //@ts-ignore
    const hotelAmenitiesStorage=JSON.parse(sessionStorage.getItem("hotelAmenities"));
    //@ts-ignore
    const vlasnik=JSON.parse(localStorage.getItem("Working-user"));
    const vlasnikId=vlasnik.korisnik.id;

    let getHotelDetalji:any;

    const hotelPodaci={
      naziv: opsteInfoStorage.nazivHotela,
      opis: opsteInfoStorage.opis,
      adresa: opsteInfoStorage.adresa,
      vlasnikID: vlasnikId,
      hotelDetaljiID: null,
      emailHotela: opsteInfoStorage.email,
      brojTelefona: opsteInfoStorage.brojTelefona,
      slika: slikaStorage,
      gradID: opsteInfoStorage.grad,
      ukupanBrojSoba: parseInt(detaljiHotelaStorage.brojJednokrevetnihSoba) +
                      parseInt(detaljiHotelaStorage.brojDvokrevetnihSoba) +
                      parseInt(detaljiHotelaStorage.brojTrokrevetnihSoba),
      brojJednokrevetnihSoba: parseInt(detaljiHotelaStorage.brojJednokrevetnihSoba),
      brojDvokrevetnihSoba: parseInt(detaljiHotelaStorage.brojDvokrevetnihSoba),
      brojTrokrevetnihSoba: parseInt(detaljiHotelaStorage.brojTrokrevetnihSoba),
      brojSpratova: parseInt(detaljiHotelaStorage.brojSpratova),
      vrijemeCheckIna: detaljiHotelaStorage.vrijemeCheckIna,
      vrijemeCheckOuta: detaljiHotelaStorage.vrijemeCheckOuta
    };

    this.httpklijent.post(MojConfig.adresa_servera + '/api/Hotel/AddHotelDetalji',hotelAmenitiesStorage,MojConfig.http_opcije()).subscribe(x => {
      getHotelDetalji=x;
      hotelPodaci.hotelDetaljiID = getHotelDetalji.id;
      console.log(hotelPodaci);
    });
    
    this.httpklijent.post(MojConfig.adresa_servera + '/api/Hotel/AddHotel',hotelPodaci,MojConfig.http_opcije()).subscribe(x => {
      console.log(x);
    });
    
    //DODAVANJE HOTELA

  }

  
}
