import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const validatestockdetails: any;
import * as jspdf from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent{

  constructor(private http: HttpClient) { }

  model = {
    NIC:'',
    telephone:'',
    supCategory:'',
    quantity:'',
    orderedDate:'',
    purchasedDate:'',
  };

  submitted = false;

  onSubmit(){ this.submitted = true;}

  method1(){
    this.http.get('http://127.0.0.1:3000/addStocks',{
      params:{
        NIC:this.model.NIC,telephone:this.model.telephone,supCategory:this.model.supCategory,quantity:this.model.quantity,orderedDate:this.model.orderedDate,purchasedDate:this.model.purchasedDate}
  }).subscribe((Response) => {
    console.log('response here', Response[0].addstocks);
  });
  }
  onClickInsertStock(){
    validatestockdetails();
  }
  DisSuccStock(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Stock details added successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  downloadPDF(){
    const doc = new jspdf();
    doc.text("Sayura Beach Hotel",80,10);
    doc.text("Supplier NIC:- "+this.model.NIC,10,30);
    doc.text("Supplier telephone :- "+this.model.telephone,10,40);
    doc.text("Category :- "+this.model.supCategory,10,50);
    doc.text("Quantity :- "+this.model.quantity,10,60);
    doc.text("Purchase Date :- "+this.model.purchasedDate,10,70);
    doc.save(this.model.NIC);
  }
}
