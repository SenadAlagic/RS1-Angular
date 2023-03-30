import { Component,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  @Input() namjena:string;
  @Input() labelButtona:string='Dodajte sliku';
  @Input() viseSlika:boolean=false;
  @Input() input:any;
  imageUrl: any;
  imageUrls: any[] = [];
  

  //TODO: TREBA FIXATI BRISANJE SLIKA

  removeImg(index:number){
    if (index >= 0 && index < this.imageUrls.length){
      this.imageUrls.splice(index, 1);

      sessionStorage.removeItem(`viseSlika${index}`);
      //this.loadImage();
      //console.log( this.imageUrls.splice(index, 1));
    }

  }

  // removeImg(index:number){

  //   if (index >= 0 && index < this.imageUrls.length) {
  //     sessionStorage.removeItem(`viseSlika${index}`);
  //     delete this.imageUrls[index];
  //   }
  // }
  

  ngOnInit(){
    this.loadImage();
  }

  loadImage() {
    if (this.viseSlika) {
      //ucitavanje vise slika
     // let noviNiz=[];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        //@ts-ignore
        if (key.startsWith('viseSlika')) {
          //@ts-ignore
          this.imageUrls.push('data:image/jpeg;base64,'+sessionStorage.getItem(key));
          //noviNiz.push(sessionStorage.getItem(key));
        }
      }
      //this.imageUrls=noviNiz;
    } else {
      //ucitavnje jedne slike
      const img = sessionStorage.getItem('jednaSlika');
      if (img) {
        this.imageUrl = 'data:image/jpeg;base64,' + img;
        this.labelButtona='Promijenite sliku';
      }
    }
  }
  
  dodajSliku(event: any) {
    const files = event.target.files;
  
    //NOTE: FileReader -> cita fajl kao binary string i pretvara ga u base64

    if (this.viseSlika==true) {
      // Upload vise slika
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageUrls.push(e.target.result);
          sessionStorage.setItem('viseSlika'+i, e.target.result.split(',')[1]);
        };
        reader.readAsDataURL(files[i]);
      }
    } 
    else {
      // Upload jedne slike
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        sessionStorage.setItem('jednaSlika', e.target.result.split(',')[1]);
      };
      reader.readAsDataURL(file);
      this.labelButtona='Promijenite sliku';
    }
  }
}
