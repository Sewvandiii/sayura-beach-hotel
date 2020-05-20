import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert'

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/viewcustomer', {
        params: {
          NIC: this.model.NIC
        }
      }).subscribe((response) => {
        this.model.name = response[0].data[0].name,this.model.address = response[0].data[0].address,this.model.telephone = response[0].data[0].telephone,this.model.email = response[0].data[0].email;
        console.log('response here', response[0].data[0].name);
      });
      this.initModel()
  }
  method2() {
    this.http.get('http://127.0.0.1:3000/updatecustomer', {
      params: {
        NIC: this.model.NIC, name: this.model.name, email: this.model.email,
        telephone: this.model.telephone, address: this.model.address
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updatecustomer);
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
  ngOnInit() {
  }
  showmodel() {
    console.log('accessed');
    new SweetAlert('center','success','Customer '+this.model.NIC+' Updated',false,2000);
  }
}
