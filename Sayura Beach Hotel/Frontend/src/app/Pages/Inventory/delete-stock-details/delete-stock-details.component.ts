import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

declare const deletestockdetails:any;
@Component({
  selector: 'app-delete-stock-details',
  templateUrl: './delete-stock-details.component.html',
  styleUrls: ['./delete-stock-details.component.css']
})
export class DeleteStockDetailsComponent {

  constructor( private http: HttpClient) { }

  model = {
    NIC:''  
    
  };

  submitted = false;

  onSubmit(){ this.submitted = true;}

  method1(){
    this.http.get('http://127.0.0.1:3000/deletestocks',{
      params:{
        NIC:this.model.NIC}
  }).subscribe((Response) => {
    console.log('response here', Response[0].deletestocks);
  });
  }
  DisDelStockAlert(){
     
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
          'Selected stock details has been deleted.',
          'success'
        )
        this.method1();
      }
    })
  }

  onclickdeletestock1(){
    deletestockdetails();
  }
}

  
