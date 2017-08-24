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


  constructor() {
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
