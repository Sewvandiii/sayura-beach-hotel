import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert'
import { Booking } from '../../../Models/booking';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

onSubmit() { this.submitted = true; }
method1() {
  this.http.get('http://127.0.0.1:3000/addbooking', {
    params: {
      NIC: this.model.NIC, type: this.model.type, fdate: this.model.from_date,
      tdate: this.model.to_date, nguests: this.model.num_of_guests
    }
  }).subscribe((response) => {
    console.log('response here', response[0].addbooking);
  });
  this.showmodel();
  this.initModel();
}
initModel(){
  return {
    NIC: '',
    type: '',
    from_date: '',
    to_date: '',
    num_of_guests: '',
  };
}

isValidForm(form) {
  return form.form.valid
}

showmodel() {
  console.log('accessed');
  new SweetAlert('center','success','Your Booking Saved Successfully',false,2000);
}
downloadPDF(){
  const doc = new jspdf();
  doc.text("Sayura Beach Hotel",80,10);
  doc.text("Customer NIC :- "+this.model.NIC,10,30);
  doc.text("Room Type :- "+this.model.type,10,40);
  doc.text("From Date :- "+this.model.from_date,10,50);
  doc.text("To Date :- "+this.model.to_date,10,60);
  doc.text("Number of Guests :- "+this.model.num_of_guests,10,70);
  doc.save("Booking"+this.model.NIC);
}
}
