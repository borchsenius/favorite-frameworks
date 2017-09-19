import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-angular',
  templateUrl: './demo-angular.component.html',
  styleUrls: ['./demo-angular.component.css']
})
export class DemoAngularComponent implements OnInit {
  title_angular = "Angular";

  constructor() { }

  ngOnInit() {
  }

}
