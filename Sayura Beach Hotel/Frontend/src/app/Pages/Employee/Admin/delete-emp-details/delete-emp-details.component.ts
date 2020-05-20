import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';


declare const validateDelete: any;
declare const validateDeleteBtn: any; 

@Component({
  selector: 'app-delete-emp-details',
  templateUrl: './delete-emp-details.component.html',
  styleUrls: ['./delete-emp-details.component.css']
})
export class DeleteEmpDetailsComponent implements OnInit {

 

  constructor(private http: HttpClient) { }

  model = {
    id:''
    };

    submitted = false;

    onSubmit() {this.submitted = true;}

     method2(){
      this.http.get('http://127.0.0.1:3000/DeleteEmp',{
        params: {id : this.model.id}
      }).subscribe((response) => {
        console.log('response here', response[0].DeleteEmp);
      });
    }
  ngOnInit() {
  }

  

  onClickDelete(){
    validateDelete();
  }
  DisDelAlert(){
     
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Selected employee details has been deleted.',
          'success'
        )
        this.method2();
      }
    })
  }
 
  
}
