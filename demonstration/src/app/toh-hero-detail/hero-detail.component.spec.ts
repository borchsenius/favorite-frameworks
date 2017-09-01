import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import {FormsModule} from "@angular/forms";
import {HeroService} from "../toh-hero/hero.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpModule, FormsModule ],


      providers: [{
        provide: HeroService,
        useClass: HeroService
      }],
      declarations: [ HeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
