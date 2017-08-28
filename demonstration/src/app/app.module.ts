import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

// import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './tor-hero/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { BootstrapNavBarComponent } from './bootstrap-nav-bar/bootstrap-nav-bar.component';

import { HeroDetailComponent } from './tor-hero-detail/hero-detail.component';
import { HeroesComponent } from './tor-heroes/heroes.component';
import { HeroService } from "./tor-hero/hero.service";
import { DashboardComponent } from './tor-dashboard/dashboard.component';
import { HeroSearchComponent } from './tor-hero-search/hero-search.component';

import { DemoBootstrapComponent } from './demo-bootstrap/demo-bootstrap.component';
import { NgbdModalBasic } from "./demo-bootstrap/Ngbd-modal-basic";
import { NgbdProgressbarLabels } from "./demo-bootstrap/ngbd-progressbar-labels";
import { DemoFontawesomeComponent } from './demo-fontawesome/demo-fontawesome.component';
import { DemoAngularComponent } from './demo-angular/demo-angular.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    DemoBootstrapComponent,
    NgbdModalBasic,
    NgbdProgressbarLabels,
    DemoFontawesomeComponent,
    DemoAngularComponent,
    HeroSearchComponent,
    BootstrapNavBarComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
