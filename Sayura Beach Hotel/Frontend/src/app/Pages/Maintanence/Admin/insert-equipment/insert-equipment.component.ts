import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';

import Swal from 'sweetalert2';
declare const validateEquipment:any;


@Component({
  selector: 'app-insert-equipment',
  templateUrl: './insert-equipment.component.html',
  styleUrls: ['./insert-equipment.component.css']
})
export class InsertEquipmentComponent {

  constructor(private http: HttpClient) { }

 
  submitted = false;
  model = {
    eNIC:'',
    edate:'',
    equantity:'',
    eprice:'',
  };

  // submitted = false;


//   onSubmit() { this.submitted = true; }
// method1() {
//   this.http.get('http://127.0.0.1:3000/insertequipment', {
//     params: {
//       NIC: this.model.NIC, fdate: this.model.from_date,
//       quantity: this.model.quantity, price: this.model.price
//     }
//   }).subscribe((response) => {
//     console.log('response here', response[0].addbooking);
//   });
  
//   this.initModel();
// }
// initModel(){
//   return {
//     NIC: '',
//     from_date: '',
//     quantity: '',
//     price: '',
//   };
// }
  onSubmit() {     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  this.submitted = true;
  this.method(); }

  method(){
    this.http.get('http://127.0.0.1:3000/insertequipment',{
      params: {
         eNIC: this.model.eNIC, edate: this.model.edate,
        equantity: this.model.equantity, eprice: this.model.eprice }
    }).subscribe((response) => {
      console.log('response here', response[0].insertequipment);
    });
  }
  handleAvailableChange(e){
    console.log(e.target.value);

    this.model.eNIC = e.target.value;
}


inserte(){
  Swal.fire({
    position: 'top',
    type: 'success',
    title: 'Equipment Inserted Successfully',
    showConfirmButton: false,
    timer: 900
  })
}
// onClickEquipment(){
//   validateEquipment();
// }
downloadPDF(){
  const doc = new jspdf();
  doc.text("Sayura Beach Hotel",80,10);
  doc.text("Equipment id :- "+this.model.eNIC,10,30);
  doc.text("Receive Date :- "+this.model.edate,10,40);
  doc.text("Price :- "+this.model.eprice,10,50);
  doc.text("Quantity :- "+this.model.equantity,10,60);
  doc.save("Equipment"+this.model.eNIC);
}
}