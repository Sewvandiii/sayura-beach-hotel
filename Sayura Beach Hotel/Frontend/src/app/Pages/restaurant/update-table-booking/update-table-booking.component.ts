import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert'


@Component({
  selector: 'app-update-table-booking',
  templateUrl: './update-table-booking.component.html',
  styleUrls: ['./update-table-booking.component.css']
})
export class UpdateTableBookingComponent implements OnInit {
  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/viewrestable', {
        params: {
          tn: this.model.tn
        }
      }).subscribe((response) => {
        this.model.nc = response[0].data[0].nc,this.model.bd = response[0].data[0].bd,this.model.price = response[0].data[0].price,this.model.ava = response[0].data[0].ava;
        console.log('response here', response[0].data[0].nc);
      });
      this.initModel()
  }
  method2() {
    this.http.get('http://127.0.0.1:3000/updaterestable', {
      params: {
        tn: this.model.tn, nc: this.model.nc, bd: this.model.bd,
        price: this.model.price, ava: this.model.ava
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updaterestable);
    });
    this.showmodel();
    this.initModel();
}
  initModel(){
    return {
      nc: '',
      bd: '',
      tn: '',
      price: '',
      ava: '',
    };
  }
  ngOnInit() {
  }
  showmodel() {
    console.log('accessed');
    new SweetAlert('center','success',''+this.model.tn+' Updated',false,2000);
  }
}
