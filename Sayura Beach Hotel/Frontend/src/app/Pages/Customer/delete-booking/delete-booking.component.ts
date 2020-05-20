import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { deleteAlert } from './../../../Pages/SweetAlert/deletealert'
@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    NIC: '',
  };
  submitted = false;

  ngOnInit() {
  }
  onSubmit() { this.submitted = true; }

  method1() {
    this.http.get('http://127.0.0.1:3000/deletebooking', {
      params: { NIC: this.model.NIC }
    }).subscribe((response) => {
      console.log('response here', response[0].deleteBooking);
    });
  }

  isValidForm(form) {
    return form.form.valid
  }
  showmodel() {
    new deleteAlert('DELETE?','Sure?','warning',true,'Delete');
  }
}
