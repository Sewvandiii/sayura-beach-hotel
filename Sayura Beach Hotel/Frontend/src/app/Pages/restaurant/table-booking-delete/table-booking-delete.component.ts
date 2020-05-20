import { Component, OnInit } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { deleteAlert } from './../../../Pages/SweetAlert/deletealert'

@Component({
  selector: 'app-table-booking-delete',
  templateUrl: './table-booking-delete.component.html',
  styleUrls: ['./table-booking-delete.component.css']
})
export class TableBookingDeleteComponent {

  constructor(private http: HttpClient) { }

  model = {
    tn: '',

  };

  submitted = false;

  onSubmit() { this.submitted = true; }

  method1(){
    this.http.get('http://127.0.0.1:3000/tablebookingdelete',{
      params: { tn: this.model.tn}
    }).subscribe((response) => {
      console.log('response here',response[0].tablebookingdelete);
    });
  }

  isValidForm(form) {
    return form.form.valid
  }

  showmodel() {
    new deleteAlert('DELETE?','Sure?','warning',true,'Delete');
  }


}

