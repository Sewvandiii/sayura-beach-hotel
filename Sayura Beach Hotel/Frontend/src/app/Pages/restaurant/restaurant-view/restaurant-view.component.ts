import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';



@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent {

  constructor(private http: HttpClient) { }

  model = this.initModel();

  method1() {
    this.http.get('http://127.0.0.1:3000/viewrestaurant', {
    })
      .subscribe((response) => {

        this.model = response[0].data;

        // tslint:disable-next-line: max-line-length
        // console.log(response[0].data[1]);
        // this.model.pid = response[0].data[1].pid;
        // this.model.pname = response[0].data[1].pname;
        // this.model.quantity = response[0].data[1].quantity;
        // this.model.price = response[0].data[1].price;
        // this.model.ava = response[0].data[1].ava;
        // console.log('response here', response[0].data[0].pname);

      });
    this.initModel();


  }

  initModel() {
    return {
      pname: '',
      quantity: '',
      pid: '',
      price: '',
      ava: '',
    };
  }


}
