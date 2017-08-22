import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {
  title_bootstrap = 'Bootstrap 4.0.0 - beta';
  private loading: number;
  private timer;

  increaseCounter() {
    console.log("increasing ");

    if(this.loading<100 ){
      this.loading = this.loading + 1;
    }else {
      this.loading = 0;
      this.timer = null;
    }

  }

  startTimerX() {
    console.log("Starting timerX");
    this.timer = setInterval(() => this.increaseCounter(), 200);
  }


  constructor() {
  }

  ngOnInit() {
    this.loading = 0;

    this.startTimerX();

  }

}
