import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-employee-detail',
  templateUrl: './update-employee-detail.component.html',
  styleUrls: ['./update-employee-detail.component.css']
})
export class UpdateEmployeeDetailComponent implements OnInit {

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
        this.model.salary = response[0].data[0].salary, this.model.bonus = response[0].data[0].bonus, this.model.loan = response[0].data[0].loan;
        console.log('response here', response[0].data[0].name);
      });
      this.initModel()
  }
  method2() {
    this.http.get('http://127.0.0.1:3000/updateacc', {
      params: {
        eid: this.model.eid, salary: this.model.salary, bonus: this.model.bonus, loan: this.model.loan
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updateacc);
    });

    
    this.initModel();
}
  initModel(){
    return {
      eid: '',
      salary: '',
      loan: '',
      bonus: '',
    };
  }

  ngOnInit() {
  }

  updatedSw(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Accounts Details Updated Successfully',
      showConfirmButton: false,
      timer: 1500
    })
    
  }

}
