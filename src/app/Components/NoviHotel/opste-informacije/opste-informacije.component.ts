import { Component,Input, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../../MojConfig";
import { Grad } from 'src/app/Helpers/grad';

@Component({
  selector: 'app-opste-informacije',
  templateUrl: './opste-informacije.component.html',
  styleUrls: ['./opste-informacije.component.css']
})
export class OpsteInformacijeComponent {
  gradovi:Grad[]=[];
  @Output() formData = new EventEmitter<any>();

  constructor(private fb: FormBuilder,private httpklijent: HttpClient){}

  opsteInfoForm:any;

  ngOnInit(){
    this.opsteInfoForm=new FormGroup({
      nazivHotela:new FormControl('',Validators.required),
      grad:new FormControl('',Validators.required),
      adresa:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      brojTelefona:new FormControl('',Validators.required),
      opis:new FormControl('',Validators.required)
    });

    //@ts-ignore
    const savedValues = JSON.parse(sessionStorage.getItem('opsteInformacijeHotel'));
    if (savedValues) {
      this.opsteInfoForm.patchValue(savedValues);
    }

    this.getGrad();
  }

  onNext() {
    sessionStorage.setItem('opsteInformacijeHotel', JSON.stringify(this.opsteInfoForm.value));
    this.formData.emit(this.opsteInfoForm.value);
  }

  getGrad(){
    this.httpklijent.get<Grad[]>(MojConfig.adresa_servera+ '/api/Grad/GetAll',MojConfig.http_opcije()).subscribe(x=>{
      this.gradovi=x;
    })
  }
}
