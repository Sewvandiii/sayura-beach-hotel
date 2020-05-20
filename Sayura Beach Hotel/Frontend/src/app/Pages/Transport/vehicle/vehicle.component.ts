import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import * as jspdf from 'jspdf';

declare const validate:any;
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent{
    
   constructor(private http: HttpClient){
     this.getModels()
   }

  model = {
    id: '',
    vehicle: '',
    mod: '',
    license: '',
    passengers: '',
    year: '',
    colour: '',

  };


  vehicles = null;
  makes = null;
  
  submitted = false;
  
  onSubmit() {this.submitted = true;}

method1(){
  this.http.get('http://127.0.0.1:3000/AddVehicle',{
    params: {VehicleID:this.model.id,Vehicle:this.model.vehicle,VehicleModel:this.model.mod,Licence:this.model.license,Max:this.model.passengers,
      Year:this.model.year,Colour:this.model.colour}
  }).subscribe((response)=>{
    console.log('response',response[0].AddVehicle);
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
    this.makes = response;
  })
}

sweetAlertAdd1(){
Swal.fire({
  position:'center',
  type:'success',
  title:'Vehicle details added successfuly',
  showConfirmButton:false,
  timer:1500
})
}

onclick(){
  validate();
}
downloadPDF(){
  const doc = new jspdf();
  doc.text("Sayura Beach Hotel",80,10);
  doc.text("Vehicle ID :- "+this.model.id,10,30);
  doc.text("Make :- "+this.model.vehicle,10,40);
  doc.text("Vehicle Model :- "+this.model.mod,10,50);
  doc.text("License Plate :- "+this.model.license,10,60);
  doc.text("Max Passengers :- "+this.model.passengers,10,70);
  doc.text("Man Year :- "+this.model.year,10,80);
  doc.text("Color :- "+this.model.colour,10,90);
  doc.save(this.model.license);
}
}
