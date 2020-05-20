import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert'
import { NgModel } from '@angular/forms';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/newcustomer', {
        params: {
          NIC: this.model.NIC, name: this.model.name, email: this.model.email,
          telephone: this.model.telephone, address: this.model.address
        }
      }).subscribe((response) => {
        console.log('response here', response[0].newcustomer);
      });
      this.showmodel();
      this.initModel();
  }

  initModel(){
    return {
      name: '',
      address: '',
      NIC: '',
      telephone: '',
      email: '',
    };
  }

  isValidForm(form) {
    return form.form.valid
  }

  showmodel() {
    console.log('accessed');
    new SweetAlert('center','success','Customer '+this.model.NIC+' Saved',false,2000);
  }

  downloadPDF(){
    const doc = new jspdf();
    doc.text("Sayura Beach Hotel",80,10);
    doc.text("Customer Name :- "+this.model.name,10,30);
    doc.text("Customer Address :- "+this.model.address,10,40);
    doc.text("Customer NIC :- "+this.model.NIC,10,50);
    doc.text("Customer Telephone NO :- "+this.model.telephone,10,60);
    doc.text("Customer Email :- "+this.model.email,10,70);
    doc.save(this.model.NIC);
  }
}

