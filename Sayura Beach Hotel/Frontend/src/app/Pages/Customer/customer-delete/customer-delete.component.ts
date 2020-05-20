import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { deleteAlert } from './../../../Pages/SweetAlert/deletealert'
@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model2 = {
    NIC: '',
  };
  submitted = false;

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  method2() {
    this.http.get('http://127.0.0.1:3000/deletecustomer', {
      params: { NIC: this.model2.NIC }
    }).subscribe((response) => {
      console.log('response here', response[0].deletecustomer);
    });
  }
  isValidForm(form) {
    return form.form.valid
  }
  showmodel() {
    new deleteAlert('DELETE?','Sure?','warning',true,'Delete');
  }
}
