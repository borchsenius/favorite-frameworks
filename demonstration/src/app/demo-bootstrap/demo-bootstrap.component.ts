import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {
  title_bootstrap = 'Bootstrap 4.0.0';

  // data structures for the progress bar
  private loading: number;
  private timer; //will be an id ref for setInterval

  // data structures for the date picker
  model: NgbDateStruct;
  date: {year: number, month: number, day: number};
  minDate: NgbDateStruct;



  selectDate(year, month, date) {
    this.model = {year: year, month: month, day: date};
  }

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  // counter
  increaseCounter() {

    if(this.loading<100 ){
      this.loading = this.loading + 1;
    }else {
      console.log("loop");
      this.loading = 0;
    }
  }

  startTimerX() {
    console.log("Starting timer");
    this.timer = setInterval(() => this.increaseCounter(), 200);
  }


  // default angular component methods
  constructor(calendar: NgbCalendar) {
    this.minDate = calendar.getToday();

    this.minDate.year = 1990;
    this.minDate.month = 12;
    this.minDate.day = 1;
  }

  ngOnInit() {
    this.loading = 0;
    this.startTimerX();

  }
  ngOnDestroy(){
    if (this.timer) {
      console.log("Stopping timer ");
      clearInterval(this.timer);
    }
  }


}
