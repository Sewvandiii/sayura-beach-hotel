import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Swal from 'sweetalert2';
import * as jspdf from 'jspdf';

declare const validateEmpFDetails: any;
@Component({
  selector: 'app-add-employee-detail',
  templateUrl: './add-employee-detail.component.html',
  styleUrls: ['./add-employee-detail.component.css']
})
export class AddEmployeeDetailComponent implements OnInit {

  constructor(private http:HttpClient) { }

  model={
    eid:'',
    salary:'',
    bonus:'',
    loan:'',
    
  };
  submitted = false;
  onSubmit() {this.submitted = true;}

method(){
  this.http.get('http://127.0.0.1:3000/addacc',{
    params: {eid:this.model.eid,salary:this.model.salary,bonus:this.model.bonus,
    loan:this.model.loan,total:(this.model.salary+this.model.bonus)
    }
  }).subscribe((response)=>{
    console.log('response',response[0].add);
  });
}

  ngOnInit() {
  }

  addedSw(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Accounts Details Added Successfully',
      showConfirmButton: false,
      timer: 1500
    })
    
  }

  onClickFDetails(){
    validateEmpFDetails();
  }
  downloadPDF(){
    const doc = new jspdf();
    doc.text("Sayura Beach Hotel",80,10);
    doc.text("Employee ID :- "+this.model.eid,10,30);
    doc.text("Employee Salary :- "+this.model.salary,10,40);
    doc.text("Employee Bonus :- "+this.model.bonus,10,50);
    doc.text("Employee Loans :- "+this.model.loan,10,60);
    doc.text("Employee Total Salary :- "+(this.model.salary+this.model.bonus),10,70);
    doc.save(this.model.eid);
  }

}
