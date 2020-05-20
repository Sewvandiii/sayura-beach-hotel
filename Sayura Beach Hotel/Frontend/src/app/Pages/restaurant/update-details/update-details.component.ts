import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert'

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/viewresdetails', {
        params: {
          pid: this.model.pid
        }
      }).subscribe((response) => {
        this.model.pname = response[0].data[0].pname,this.model.quantity = response[0].data[0].quantity,this.model.price = response[0].data[0].price,this.model.ava = response[0].data[0].ava;
        console.log('response here', response[0].data[0].pname);
      });
      this.initModel()
  }
  method2() {
    this.http.get('http://127.0.0.1:3000/updateresdetails', {
      params: {
        pid: this.model.pid, pname: this.model.pname, quantity: this.model.quantity,
        price: this.model.price, ava: this.model.ava
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updateresstockdetails);
    });
    this.showmodel();
    this.initModel();
}
  initModel(){
    return {
      pname: '',
      quantity: '',
      pid: '',
      price: '',
      ava: '',
    };
  }
  ngOnInit() {
  }
  showmodel() {
    console.log('accessed');
    new SweetAlert('center','success',''+this.model.pid+' Updated',false,2000);
  }
}
