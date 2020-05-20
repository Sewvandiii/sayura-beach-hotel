import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const validatesupplierdetails: any;

@Component({
  selector: 'app-suplier-details',
  templateUrl: './suplier-details.component.html',
  styleUrls: ['./suplier-details.component.css']
})
export class SuplierDetailsComponent {

  constructor(private http: HttpClient) { }

  model = {
    supname:'',
    supNIC:'',
    address:'',
    email:'',
    contactNo:'',
    supcategory:'',
    description:'',
  }

  method1(){
    this.http.get('http://127.0.0.1:3000/addSupplier',{
      params:{
        name:this.model.supname, NIC:this.model.supNIC, address:this.model.address, email:this.model.email, contactNo:this.model.contactNo, supcategory:this.model.supcategory, description:this.model.description }
  }).subscribe((Response) => {
    console.log('response here', Response[0].addsupplier);
  });
  }
 
  onClickInsertSupplier(){
    validatesupplierdetails();

 }
}
