import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';


@Component({
  selector: 'app-viewtablebookingdetails',
  templateUrl: './viewtablebookingdetails.component.html',
  styleUrls: ['./viewtablebookingdetails.component.css']
})
export class ViewtablebookingdetailsComponent  {

  constructor(private http: HttpClient) { }

  model = this.initModel();

  method1() {
    this.http.get('http://127.0.0.1:3000/tablebookingview', {
    })
      .subscribe((response) => {

        this.model = response[0].data;


      });
    this.initModel();


  }

  initModel() {
    return {
      nc: '',
      bd: '',
      tn: '',
      price: '',
      ava: '',
    };
  }


}
