import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-room-amenities',
  templateUrl: './room-amenities.component.html',
  styleUrls: ['./room-amenities.component.css']
})
export class RoomAmenitiesComponent {
  checkBoxes = [
    { label: 'Tv', control: new FormControl(false) },
    { label: 'Kuhinja', control: new FormControl(false) },
    { label: 'Dozvoljeno pusenje', control: new FormControl(false) },
    { label: 'Kucni ljubimci', control: new FormControl(false) },
    { label: 'Prilagodjeno za djecu', control: new FormControl(false) },
    { label: 'Fen', control: new FormControl(false) },
    { label: 'Pegla', control: new FormControl(false) },
    { label: 'Dodatni jastuci', control: new FormControl(false) },
    { label: 'Mikrovalna', control: new FormControl(false) },
    { label: 'Kafe aparat', control: new FormControl(false) },
    { label: 'Očistiti prije odlaska', control: new FormControl(false) },
    { label: 'Kupatilo', control: new FormControl(false) },
    { label: 'Klima', control: new FormControl(false) },
    { label: 'Grijanje', control: new FormControl(false) },
    { label: 'Balkon', control: new FormControl(false) },
  ];

  checkBoxesDiv1=this.checkBoxes.slice(0,5);
  checkBoxesDiv2=this.checkBoxes.slice(5,10);
  checkBoxesDiv3=this.checkBoxes.slice(10,15);

  myForm = new FormGroup({
    tv: this.checkBoxes[0].control,
    kuhinja: this.checkBoxes[1].control,
    dozvoljenoPusenja: this.checkBoxes[2].control,
    kucniLjubimci: this.checkBoxes[3].control,
    prilagodjenoZaDjecu: this.checkBoxes[4].control,
    fen: this.checkBoxes[5].control,
    pegla: this.checkBoxes[6].control,
    dodatniJastuci: this.checkBoxes[7].control,
    mikrovalna: this.checkBoxes[8].control,
    kafeAparat: this.checkBoxes[9].control,
    ocistitiPrijeOdlaska: this.checkBoxes[10].control,
    kupatilo: this.checkBoxes[11].control,
    klima: this.checkBoxes[12].control,
    grijanje: this.checkBoxes[13].control,
    balkon: this.checkBoxes[14].control
  });

  ngOnInit(){
    this.loadCheckboxesState();
  }

  allCheckboxes = new FormControl(false);

  toggleAllCheckboxes() {
    const isChecked = this.allCheckboxes.value;
    this.checkBoxes.forEach((checkBox) => {
      checkBox.control.setValue(isChecked);
    });
    this.saveToSessionStorage();
  }

  saveToSessionStorage() {
    const checkboxValue:any = {};
    this.checkBoxes.forEach((checkBox) => {
      //value[key]=value
      checkboxValue[checkBox.label] = checkBox.control.value;
    });
    sessionStorage.setItem('roomAmenities', JSON.stringify(checkboxValue));
  }

  loadCheckboxesState() {
    //@ts-ignore
    const checkboxValue = JSON.parse(sessionStorage.getItem('roomAmenities'));
    if (checkboxValue) {
      this.checkBoxes.forEach((checkBox) => {
        const state = checkboxValue[checkBox.label];
        checkBox.control.setValue(state);
      });
    }
  }
}
