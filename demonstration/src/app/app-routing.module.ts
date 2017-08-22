import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {DemoAngularComponent} from "./demo-angular/demo-angular.component";
import {DemoBootstrapComponent} from "./demo-bootstrap/demo-bootstrap.component";
import {DemoFontawesomeComponent} from "./demo-fontawesome/demo-fontawesome.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'angular',     component: DemoAngularComponent },
  { path: 'bootstrap',     component: DemoBootstrapComponent },
  { path: 'fontawesome',     component: DemoFontawesomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
