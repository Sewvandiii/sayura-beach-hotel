import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-view-employee-detail',
  templateUrl: './view-employee-detail.component.html',
  styleUrls: ['./view-employee-detail.component.css']
})
export class ViewEmployeeDetailComponent implements OnInit {

  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/viewacc', {
        params: {
          eid: this.model.eid
        }
      }).subscribe((response) => {
        this.model.salary = response[0].data[0].salary, this.model.bonus = response[0].data[0].bonus, this.model.loan = response[0].data[0].loan, this.model.total = response[0].data[0].total;
        console.log('response here', response[0].data[0].name);
      });
      this.initModel()
  }
  initModel(){
    return {
      eid: '',
      salary: '',
      loan: '',
      bonus: '',
      total:'',
    };
  }

  ngOnInit() {
  }

}