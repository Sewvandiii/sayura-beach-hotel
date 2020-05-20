import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model2 = {
    id: '',
  };
  submitted = false;

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  method2() {
    this.http.get('http://127.0.0.1:3000/deletevehicle', {
      params: { VehicleID: this.model2.id}
    }).subscribe((response) => {
      console.log('response here', response[0].deletevehicle);
    });
  }

  sweetAlertDelete(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result)=>{
      if(result.value){
        Swal.fire(
          'Deleted',
          'Selected vehicle details has been deleted',
          'success'
        )
        this.method2();
      }
    })
    }

  
}
