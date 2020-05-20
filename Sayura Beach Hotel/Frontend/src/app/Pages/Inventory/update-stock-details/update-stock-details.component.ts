import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-stock-details',
  templateUrl: './update-stock-details.component.html',
  styleUrls: ['./update-stock-details.component.css']
})
export class UpdateStockDetailsComponent {

  constructor(private http: HttpClient) { }

  model = {
    supNIC:'',
    supcontactNo:'',
    supcategory:'',
    quantity:'',
    orderedDate:'',
    purchasedDate:'',
  };

  submitted = false;

  onSubmit(){ this.submitted = true;}

  method1() {
    this.http.get('http://127.0.0.1:3000/viewstock', {
      params: {
        supNIC: this.model.supNIC
      }
    }).subscribe((response) => {
      this.model.supNIC = response[0].data[0].NIC,this.model.supcontactNo = response[0].data[0].telephone,this.model.supcategory = response[0].data[0].supcategory,this.model.quantity = response[0].data[0].quantity,this.model.orderedDate = response[0].data[0].orderedDate,this.model.purchasedDate = response[0].data[0].purchasedDate;
      console.log('response here', response[0].data[0].name);
    });
    this.model
}
method2() {
  this.http.get('http://127.0.0.1:3000/updatestock', {
    params: {
      NIC: this.model.supNIC, supcontactNo: this.model.supcontactNo, supcategory: this.model.supcategory,
      quantity: this.model.quantity, orderedDate: this.model.orderedDate, purchasedDate: this.model.purchasedDate
    }
  }).subscribe((response) => {
  });
}
DisSuccStockUp(){
  Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'Stock details updated successfully',
    showConfirmButton: false,
    timer: 1500
  })
}

  }


  


