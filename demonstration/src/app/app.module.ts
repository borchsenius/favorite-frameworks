import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

// import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from "./hero.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoBootstrapComponent } from './demo-bootstrap/demo-bootstrap.component';
import { NgbdModalBasic } from "./demo-bootstrap/Ngbd-modal-basic";
import { DemoFontawesomeComponent } from './demo-fontawesome/demo-fontawesome.component';
import { DemoAngularComponent } from './demo-angular/demo-angular.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    DemoBootstrapComponent,
    DemoFontawesomeComponent,
    DemoAngularComponent,
    HeroSearchComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    //RouterModule.forRoot(routes, {enableTracing: true}),
    NgbModule.forRoot()
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
