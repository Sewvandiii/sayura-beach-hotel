import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import Swal from 'sweetalert2';
declare const validateUpdateShift:any;

@Component({
  selector: 'app-update-daily-shift',
  templateUrl: './update-daily-shift.component.html',
  styleUrls: ['./update-daily-shift.component.css']
})
export class UpdateDailyShiftComponent{

  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/viewdailyshift', {
        params: {
          NIC: this.model.NIC
        }
      }).subscribe((response) => {
        this.model.NIC = response[0].data[0].nic, this.model.position = response[0].data[0].position,this.model.time = response[0].data[0].time,this.model.date = response[0].data[0].date,this.model.section = response[0].data[0].section;
        console.log('response here', response[0].data[0].name);
      });
      this.initModel()
  }
  method2() {
    this.http.get('http://127.0.0.1:3000/updatedailshift', {
      params: {
        NIC: this.model.NIC, time: this.model.time, date: this.model.date,
        section: this.model.section, position: this.model.position
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updatedailshift);
    });
  
    this.initModel();
}
  initModel(){
    return {
      NIC: '',
      time: '',
      date: '',
      section: '',
      position: '',
    };
  }
  ngOnInit() {
  }

  updated(){
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