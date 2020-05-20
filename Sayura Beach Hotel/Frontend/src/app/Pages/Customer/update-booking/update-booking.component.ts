import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert'

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/viewcustomerbooking', {
        params: {
          NIC: this.model.NIC
        }
      }).subscribe((response) => {
        this.model.type = response[0].data[0].type, this.model.from_date = response[0].data[0].from_date,this.model.to_date = response[0].data[0].todate,this.model.num_of_guests = response[0].data[0].numofguests;
        console.log('response here', response[0].data[0].name);
      });
      this.initModel()
  }
  method2() {
    this.http.get('http://127.0.0.1:3000/updatecustomerbooking', {
      params: {
        NIC: this.model.NIC, type: this.model.type, from_date: this.model.from_date,
        to_date: this.model.to_date, num_of_gusets: this.model.num_of_guests
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updatecustomerbooking);
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
  ngOnInit() {
  }
  showmodel() {
    console.log('accessed');
    new SweetAlert('center','success','Customer '+this.model.NIC+' Updated',false,2000);
  }
}
