import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
declare const validateDeleteShift:any;

@Component({
  selector: 'app-delete-daily-shift',
  templateUrl: './delete-daily-shift.component.html',
  styleUrls: ['./delete-daily-shift.component.css']
})
export class DeleteDailyShiftComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model2 = {
    NIC: '',
  };
  submitted = false;

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  method2() {
    this.http.get('http://127.0.0.1:3000/deletedailyshift', {
      params: { nic: this.model2.NIC }
    }).subscribe((response) => {
      console.log('response here', response[0].deletedailyshift);
    });
  }

    // onClickDelete(){
    //   validateDeleteShift();
    // }

  deleted(){
    Swal.fire({
    
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton:true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Yes, delete it!'

    }).then((result) => {
        if(result.value) {
          Swal.fire(
            'Deleted!',
            'Selected Dailyshift details has been deleted!',
            'success'

          )
          this.method2();
        }
    })
  }
  
}
