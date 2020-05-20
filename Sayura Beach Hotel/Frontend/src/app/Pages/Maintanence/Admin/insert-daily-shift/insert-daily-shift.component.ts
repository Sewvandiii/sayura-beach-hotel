import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as jspdf from 'jspdf';


import Swal from 'sweetalert2';

declare const validateShift:any;

@Component({
  selector: 'app-insert-daily-shift',
  templateUrl: './insert-daily-shift.component.html',
  styleUrls: ['./insert-daily-shift.component.css']
})
export class InsertDailyShiftComponent{

  constructor(private http: HttpClient) { }

  model = {
    NIC:'',
    time:'',
    date:'',
    section:'',
    position:'',


  };

  submitted = false;

  onSubmit() {     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  this.submitted = true;
  this.method(); }

  method(){
    this.http.get('http://127.0.0.1:3000/insertdaily',{
      params: { NIC: this.model.NIC, time: this.model.time, date: this.model.date,section: this.model.section, position: this.model.position}
    }).subscribe((response) => {
      console.log('response here', response[0].insertdaily);
    });
  }
  handleAvailableChange(e){
    console.log(e.target.value);

    this.model.NIC = e.target.value;
}



insertd(){
  Swal.fire({
    position: 'top',
    type: 'success',
    title: 'Dailyshift Inserted Successfully',
    showConfirmButton: false,
    timer: 900
  })
}

onClickShift(){
  validateShift();
}
downloadPDF(){
  const doc = new jspdf();
  doc.text("Sayura Beach Hotel",80,10);
  doc.text("Empolyee NIC :- "+this.model.NIC,10,30);
  doc.text("TIME :- "+this.model.time,10,40);
  doc.text("DATE :- "+this.model.date,10,50);
  doc.text("Section :- "+this.model.section,10,60);
  doc.text("Employee Position :- "+this.model.position,10,70);
  doc.save(this.model.NIC);
}

}
