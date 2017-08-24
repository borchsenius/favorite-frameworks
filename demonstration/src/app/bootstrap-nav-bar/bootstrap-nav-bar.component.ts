import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-nav-bar',
  templateUrl: './bootstrap-nav-bar.component.html',
  styleUrls: ['./bootstrap-nav-bar.component.css']
})
export class BootstrapNavBarComponent implements OnInit {
  collapse: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
