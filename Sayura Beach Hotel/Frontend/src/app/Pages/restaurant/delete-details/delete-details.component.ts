import { Component, OnInit } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { deleteAlert } from './../../../Pages/SweetAlert/deletealert'

@Component({
  selector: 'app-delete-details',
  templateUrl: './delete-details.component.html',
  styleUrls: ['./delete-details.component.css']
})
export class DeleteDetailsComponent {
  constructor(private http: HttpClient) { }

  model = {
    pid: '',

  };

  submitted = false;

  onSubmit() { this.submitted = true; }

  method1(){
    this.http.get('http://127.0.0.1:3000/deletedetails',{
      params: { pid: this.model.pid}
    }).subscribe((response) => {
      console.log('response here',response[0].deletedetails);
    });
  }
  isValidForm(form) {
    return form.form.valid
  }
  showmodel() {
    new deleteAlert('DELETE?','Sure?','warning',true,'Delete');
  }
}
