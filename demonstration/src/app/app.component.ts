import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'], /** well we dont really use these. Use bootstraps css instead **/
  providers: []

})

export class AppComponent {
  title = 'Tour of Heroes';
  title_angular = 'Angular';




}
