import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Response } from 'selenium-webdriver/http';
import * as jspdf from 'jspdf';

declare const printVeh:any; 
@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})


export class AvailableComponent  {

  constructor(private http: HttpClient) { }

  // model = this.initModel();

  vehicles = null;
  

  methodv(){
    this.http.get('http://127.0.0.1:3000/view',{
    })
    .subscribe((response)=>{
      console.log(response);
      this.vehicles = response[0].data;
      // this.model = response[0].data;
    });
    // this.initModel();
  }

  onclick(){
    printVeh();
  }

  
  // initModel(){
  //   return{
  //     id: '',
  //     vehicle: '',
  //     mod: '',
  //     license: '',
  //     passengers: '',
  //     year: '',
  //     colour: '',
  //   };
  // }

  // ngOnInit() {
  // }

}
