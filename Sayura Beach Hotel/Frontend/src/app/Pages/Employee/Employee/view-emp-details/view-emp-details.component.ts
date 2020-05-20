import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare const printEmp:any;
@Component({
  selector: 'app-view-emp-details',
  templateUrl: './view-emp-details.component.html',
  styleUrls: ['./view-emp-details.component.css']
})
export class ViewEmpDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    VwId:''
    };

    submitted = false;

    onSubmit() {this.submitted = true;}

  method7(){
    this.http.get('http://127.0.0.1:3000/ViewEmp',{
      params: {VwId : this.model.VwId}
    }).subscribe((response) => {
      // var vwId = vwId;
      // var vwName = vwName;
      // var vwNic = vwNic;
      // var vwAge = vwAge;
      // var vwBirth = vwBirth;
      // var vwMobile = vwMobile;
      // var vwJoin = vwJoin;
      // var vwPosition = vwPosition;
      // var vwPass = vwPass;
      // var vwGender = vwGender;
      // var vwMstatus = vwMstatus;
      this.model2.vId = response[0].data[0].id,this.model2.vName = response[0].data[0].name,this.model2.vNic = response[0].data[0].nic,
      this.model2.vAge = response[0].data[0].age,this.model2.vBirth = response[0].data[0].Bdate,this.model2.vMobile = response[0].data[0].mobile,
      this.model2.vJoin = response[0].data[0].Jdate,this.model2.vPosi = response[0].data[0].position,this.model2.vPass = response[0].data[0].password,
      this.model2.vGender = response[0].data[0].gender,this.model2.vMarry = response[0].data[0].marry;
      
      console.log('response here', response[0].data.id);
      
    });


  }

  model2 = {
    vId:'',
    vName:'',
    vNic:'',
    vAge:'',
    vBirth:'',
    vMobile:'',
    vJoin:'',
    vPosi:'',
    vPass:'',
    vGender:'',
    vMarry:''
  };
  
  ngOnInit() {
  }
  onClick(){
    printEmp();
  }
}
