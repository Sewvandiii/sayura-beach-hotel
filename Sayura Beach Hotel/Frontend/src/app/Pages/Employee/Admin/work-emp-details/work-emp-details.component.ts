import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

declare const validateWork:any;
declare const validateWorkTime:any;
declare const validateWorkBtn:any;
@Component({
  selector: 'app-work-emp-details',
  templateUrl: './work-emp-details.component.html',
  styleUrls: ['./work-emp-details.component.css']
})
export class WorkEmpDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    wId:'',
    wDate:'',
    wTime:'',
    wTimeStatus:''
    
  };

  submitted = false;

  onSubmit() {this.submitted = true;}

  method5(){
    this.http.get('http://127.0.0.1:3000/work',{
      params: {wId : this.model.wId, wDate:this.model.wDate, wTime:this.model.wTime, wTimeStatus:this.model.wTimeStatus}
    }).subscribe((response) => {
      console.log('response here', response[0].work);
    });
  }

  ngOnInit() {
  }

  onClickWork(){
    validateWork();
    //validateWorkTime()
  }
  DisSuccAddW(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Employee work details saved successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
