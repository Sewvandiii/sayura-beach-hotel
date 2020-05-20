import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
declare const validateDeleteEquipment:any;

@Component({
  selector: 'app-delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.css']
})
export class DeleteEquipmentComponent  {

  constructor(private http: HttpClient) { }

  model = {
    NIC: '',
  };
  submitted = false;

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  method() {
    this.http.get('http://127.0.0.1:3000/deleteequipment', {
      params: { NIC: this.model.NIC }
    }).subscribe((response) => {
      console.log('response here', response[0].deleteequipment);
    });
  }

  // onClickDeleteEquipment(){
  //   validateDeleteEquipment();
  // }

  deletee(){
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
            'Selected Equipment details has been deleted!',
            'success'

          )
          this.method();
        }
    })
  }
  
}
