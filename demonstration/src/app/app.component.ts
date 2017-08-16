import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'], /** well we dont really use these. Use bootstraps css instead **/
  providers: []

})

export class AppComponent {
  title = 'Tour of Heroes';
  title_angular = 'Angular';
  title_bootstrap = 'Bootstrap & ng-bootsrap';
  title_fontawesome = 'Font awesome';



}
