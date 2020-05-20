import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const deletesupplierdetails:any;
import Swal from 'sweetalert2';


@Component({
  selector: 'app-delete-supplier-details',
  templateUrl: './delete-supplier-details.component.html',
  styleUrls: ['./delete-supplier-details.component.css']
})
export class DeleteSupplierDetailsComponent {

  constructor( private http: HttpClient) { }

  model = {
    NIC:''
    
  };

  submitted = false;

  onSubmit(){ this.submitted = true;}

  method1(){
    this.http.get('http://127.0.0.1:3000/deletesupplier',{
      params:{
        NIC:this.model.NIC}
  }).subscribe((Response) => {
    console.log('response here', Response[0].deletesupplier);
  });
}
DisDelSupAlert(){
     
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
        'Selected suplier details has been deleted.',
        'success'
      )
      this.method1();
    }
  })
}
  onclickdeletesuplierdetails(){
    deletesupplierdetails();
  
  }
}


  






