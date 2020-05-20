import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
declare const validate:any;
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http: HttpClient){}

  model3 = {
    id: '',
    vehicle: '',
    mod: '',
    license: '',
    passengers: '',
    year: '',
    colour: '',

  };

  ngOnInit() {
    this.getModels();
  }

  vehicles = null;
  makes = null;
  
  submitted = false;
  
  onSubmit() {this.submitted = true;}

method3(){
  console.log(this.model3);
  this.http.get('http://127.0.0.1:3000/update',{
    params: {VehicleID:this.model3.id,Vehicle:this.model3.vehicle,VehicleModel:this.model3.mod,Licence:this.model3.license,Max:this.model3.passengers,
      Year:this.model3.year,Colour:this.model3.colour}
  }).subscribe((response)=>{
    console.log('response',response[0].update);
  });
}
  
populateSelect(value){
  this.http.get('http://127.0.0.1:3000/getVehicleByModel',{
    params: {model:value}
  }).subscribe(response => {
    this.vehicles = response;
    console.log(response);
  })
  }
  
  getModels(){
    this.http.get('http://127.0.0.1:3000/getmakes',{
    }).subscribe(response=>{
      console.log(response);
      this.makes = response;
    })
  }

  model4={
    id: '',
  };

  submitted1 = false;
  
  onSubmit1() {this.submitted = true;}
 
  method4(){
    console.log(this.model4);
    this.http.get('http://127.0.0.1:3000/edit',{
      params: {VehicleID:this.model4.id}
    }).subscribe((response)=>{
      console.log(response[0].data[0]);
      this.model3.id=response[0].data[0].VehicleID,this.model3.vehicle=response[0].data[0].vName,this.model3.mod=response[0].data[0].mName,this.model3.license=response[0].data[0].Licence,this.model3.passengers=response[0].data[0].Max,this.model3.year=response[0].data[0].Year,this.model3.colour=response[0].data[0].Colour;
      console.log('response',response[0].data[0].id);
    });
  }

  sweetAlertUpdate(){
    Swal.fire({
      position:'center',
      type:'success',
      title:'Vehicle details updated successfuly',
      showConfirmButton:false,
      timer:1500
    })
    }

onclick(){
  validate();
  }


}
