import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-supplier-details',
  templateUrl: './update-supplier-details.component.html',
  styleUrls: ['./update-supplier-details.component.css']
})
export class UpdateSupplierDetailsComponent{

  constructor(private http: HttpClient) { }

  model = {
    supname:'',
    supNIC:'',
    address:'',
    email:'',
    contactno:'',
    supcategory:'',
    description:''
  }

    submitted = false;

    onSubmit(){ this.submitted = true;}

    method1() {
      this.http.get('http://127.0.0.1:3000/viewsup', {
        params: {
          supNIC: this.model.supNIC
        }
      }).subscribe((response) => {
        this.model.supname = response[0].data[0].supname, this.model.supNIC = response[0].data[0].supNIC,this.model.address = response[0].data[0].address,this.model.email= response[0].data[0].email,this.model.contactno= response[0].data[0].contactNo,this.model.supcategory= response[0].data[0].supcategory,this.model.description= response[0].data[0].description;
        console.log('response here', response[0].data[0].name);
      });
      this.model
  }
  method2() {
    this.http.get('http://127.0.0.1:3000/updatesupp', {
      params: {
        NIC: this.model.supNIC, name: this.model.supname, supcategory: this.model.supcategory,
        email: this.model.email, description: this.model.description, contactno: this.model.contactno, address: this.model.address
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updatecustomerbooking);
    });
this.model
}
}
