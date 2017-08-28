import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './tor-dashboard/dashboard.component';
import { HeroesComponent }      from './tor-heroes/heroes.component';
import { HeroDetailComponent }  from './tor-hero-detail/hero-detail.component';
import {DemoAngularComponent} from "./demo-angular/demo-angular.component";
import {DemoBootstrapComponent} from "./demo-bootstrap/demo-bootstrap.component";
import {DemoFontawesomeComponent} from "./demo-fontawesome/demo-fontawesome.component";
import {FrontpageComponent} from "./frontpage/frontpage.component";

const routes: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
  { path: 'frontpage',  component: FrontpageComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'angular',     component: DemoAngularComponent },
  { path: 'bootstrap',     component: DemoBootstrapComponent },
  { path: 'fontawesome',     component: DemoFontawesomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  // RouterModule.forRoot(routes, {enableTracing: true}),
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
