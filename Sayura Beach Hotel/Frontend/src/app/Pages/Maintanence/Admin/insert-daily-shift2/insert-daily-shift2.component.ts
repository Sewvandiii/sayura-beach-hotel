import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-insert-daily-shift2',
  templateUrl: './insert-daily-shift2.component.html',
  styleUrls: ['./insert-daily-shift2.component.css']
})
export class InsertDailyShift2Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  model = {
    nic:'',
    time:'',
    date:'',
    // section:'',
    // position:'',


  };

  submitted = false;

  onSubmit() {this.submitted = true;}

  method(){
    this.http.get('http://127.0.0.1:3000/insertdaily ',{
      params: { NIC: this.model.nic, time: this.model.time, date: this.model.date }
    }).subscribe((response) => {
      console.log('response here', response[0].insertdaily);
    });
  }
}
