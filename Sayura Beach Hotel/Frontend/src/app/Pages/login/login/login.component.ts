import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  model = {
    uName: '',
    pw: '',
  };

  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    this.http.get('http://127.0.0.1:3000/getUsers1').subscribe((res) => {
      this.model.uName = res[0].item;
    });
  }

  method1() {
    this.http.get('http://127.0.0.1:3000/login', {
      params: { user_id: this.model.uName, pw: this.model.pw }
    }).subscribe((response) => {
      console.log('response here', response[0].login);
      if (response[0].login) {
        this.router.navigate(['/' + this.getRouterLinkForWorkingUnit(response[0].performingUnit)]);
      }
    });
  }

  getRouterLinkForWorkingUnit(workingUnit) {
    switch (workingUnit) {
      case 'acc':
        return 'add-employee-detail';
      case 'cus':
        return 'home';
      case 'emp':
        return 'manage-emp';
      case 'mam':
        return 'insert';
      case 'trn':
        return 'vehicle';
      case 'inv':
        return 'stock';
      case 'res':
        return 'adddetails';
      default:
        return '';
    }
  }

}
