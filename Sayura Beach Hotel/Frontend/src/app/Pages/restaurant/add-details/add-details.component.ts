import { Component, OnInit } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert';
import { from } from 'rxjs';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent{
  // model: any = {};


  constructor(private http: HttpClient) { }

  model = {
    pid: '',
    pname: '',
    quantity: '',
    price: '',
    ava: '',
  };

  submitted = false;

  onSubmit() {

    this.submitted = true;
    this.method1();
  }

  method1(){
    this.http.get('http://127.0.0.1:3000/addstockdetails',{
      params: { pid: this.model.pid, pname: this.model.pname,quantity: this.model.quantity,
        price: this.model.price,ava: this.model.ava}
    }).subscribe((response) => {
      console.log('response here',response[0].addstockdetails);
    });
    this.showmodel();


  }



  handleAvailableChange(e){
    console.log(e.target.value);

    this.model.ava = e.target.value;
  }

  showmodel() {
    console.log('accessed');
    new SweetAlert('center','success',' ADD',false,2000);
  }

  downloadPDF(){
    const doc = new jspdf();
    doc.text("Sayura Beach Hotel",80,10);
    doc.text("Name :- "+this.model.pname,10,30);
    doc.text("ID  :- "+this.model.pid,10,40);
    doc.text("Quantity :- "+this.model.quantity,10,50);
    doc.text("Price :- "+this.model.price,10,60);
    doc.text("Availability :- "+this.model.ava,10,70);
    doc.save(this.model.pid);
  }
}
