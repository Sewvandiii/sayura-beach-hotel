import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import * as jspdf from 'jspdf';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
//import {FormBuilder, Validators} from '@angular/forms';
//import { get } from 'https';

declare const validate:any;
declare const printEmp:any;
declare const validateAddBtn:any;
@Component({
  selector: 'app-manage-emp-details',
  templateUrl: './manage-emp-details.component.html',
  styleUrls: ['./manage-emp-details.component.css']
})
export class ManageEmpDetailsComponent implements OnInit {
  // form = new FormGroup({
  //   name:new FormControl('',Validators.required)
  // })
  constructor(private http: HttpClient) { }

  model = {
    id:'',
    name:'',
    NIC:'',
    age:'',
    Bdate:'',
    mobile:'',
    Jdate:'',
    Position:'',
    Password:'',
    gender:'',
    marry:''

  };

  submitted = false;

  onSubmit() {this.submitted = true;}

  method1(){
    this.http.get('http://127.0.0.1:3000/AddEmp',{
      params: {id : this.model.id, name:this.model.name, nic:this.model.NIC, age:this.model.age, Bdate:this.model.Bdate, mobile:this.model.mobile, Jdate:this.model.Jdate, position:this.model.Position, password:this.model.Password, gender:this.model.gender, marry:this.model.marry}
    }).subscribe((response) => {
      console.log('response here', response[0].AddEmp);
    });
  }
  ngOnInit() {
  }

  onClick(){
    validate();
    printEmp();
  }
  DisSuccAdd(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Employee added successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  downloadPDF(){ //this
    const doc = new jspdf();
    doc.text("Sayura Beach Hotel",80,10);
    doc.text("Employee Name :- "+this.model.name,10,30);
    doc.text("Employee NIC/Passport :- "+this.model.NIC,10,40);
    doc.text("Employee Age :- "+this.model.age,10,50);
    doc.text("Employee Telephone NO :- "+this.model.mobile,10,60);
    doc.text("Employee Join date :- "+this.model.Jdate,10,70);
    doc.text("Employee Password :- "+this.model.Password,10,80);
    doc.save(this.model.NIC);
  }

  
  // addForm = this.fb.group({
  //   eID: ['',Validators.required]
  // })

  
  // get eID(){
  //   return this.addForm.get('eID');
  // }
  
}
