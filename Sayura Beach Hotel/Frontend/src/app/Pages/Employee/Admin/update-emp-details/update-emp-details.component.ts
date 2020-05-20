import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

declare const validateUpdate:any;
declare const validateEditBtn:any;
@Component({
  selector: 'app-update-emp-details',
  templateUrl: './update-emp-details.component.html',
  styleUrls: ['./update-emp-details.component.css']
})
export class UpdateEmpDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    id:''
    };

    submitted = false;

    onSubmit() {this.submitted = true;}
  
    method3(){
      this.http.get('http://127.0.0.1:3000/EditEmp',{
        params: {id : this.model.id}
      }).subscribe((response) => {
        this.model2.id = response[0].data[0].id,this.model2.name = response[0].data[0].name,this.model2.NIC = response[0].data[0].nic,
        this.model2.age = response[0].data[0].age,this.model2.Bdate = response[0].data[0].Bdate,this.model2.mobile = response[0].data[0].mobile,
        this.model2.Jdate = response[0].data[0].Jdate,this.model2.Position = response[0].data[0].position,this.model2.Password = response[0].data[0].password,
        this.model2.gender = response[0].data[0].gender,this.model2.marry = response[0].data[0].marry;
        console.log('response here', response[0].data.id);
      });
    }
    model2 = {
      id:'',
      name:'',
      NIC:'',
      age:'',
      Bdate:'',
      mobile:'',
      Jdate:'',
      Position:'',
      Password:'',
      gender:'',
      marry:''
  
    };
  
    submitted2 = false;
  
    onSubmit2() {this.submitted = true;}
  
    method5(){
      this.http.get('http://127.0.0.1:3000/UpdateEmp',{
        params: {id : this.model2.id, name:this.model2.name, nic:this.model2.NIC, age:this.model2.age, Bdate:this.model2.Bdate, mobile:this.model2.mobile, Jdate:this.model2.Jdate, position:this.model2.Position, password:this.model2.Password, gender:this.model2.gender, marry:this.model2.marry}
      }).subscribe((response) => {
        console.log('response here', response[0].UpdateEmp);
      });
    }

  ngOnInit() {
  }

  onClickU(){
    validateUpdate();
  }
  onClickE(){
    validateEditBtn();
  }
  DisSuccUpdate(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Employee details updated successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
