import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import Swal from 'sweetalert2';
declare const validateUpdateEquipment:any;

@Component({
  selector: 'app-equipment-update-center',
  templateUrl: './equipment-update-center.component.html',
  styleUrls: ['./equipment-update-center.component.css']
})
export class EquipmentUpdateCenterComponent {

  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/viewequipment', {
        params: {
          NIC: this.model.eNIC
        }
      }).subscribe((response) => {
        this.model.eNIC = response[0].data[0].nic, this.model.edate = response[0].data[0].date,this.model.eprice = response[0].data[0].price,this.model.equantity = response[0].data[0].quantity;
        console.log('response here', response[0].data[0].nic);
      });
      this.initModel()
      this.initModel()
  }
  method2() {
    this.http.get('http://127.0.0.1:3000/updateequipment', {
      params: {
        NIC: this.model.eNIC, date: this.model.edate,
        quantity: this.model.equantity, price: this.model.eprice
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updatedailshift);
    });
  
    this.initModel();
}
  initModel(){
    return {
      eNIC: '',
      edate: '',
      equantity: '',
      eprice: '',
    };
  }
  ngOnInit() {
  }

  updatee(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Dailyshift Updated Successfully',
      showConfirmButton: false,
      timer: 900
    })
  }
  // onClickShift(){
  //   validateUpdateShift();
  
  // }
}