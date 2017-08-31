import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {APP_BOOTSTRAP_LISTENER} from "@angular/core";
import {BootstrapNavBarComponent} from "./bootstrap-nav-bar/bootstrap-nav-bar.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot(), RouterTestingModule],
      declarations: [
        AppComponent, BootstrapNavBarComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));

});
