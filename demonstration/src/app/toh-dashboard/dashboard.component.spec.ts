import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {Hero} from "../toh-hero/hero";
import {By} from "@angular/platform-browser";
import { DebugElement }    from '@angular/core';
import {RouterTestingModule} from "@angular/router/testing";
import {HeroSearchComponent} from "../toh-hero-search/hero-search.component";
import {HeroService} from "../toh-hero/hero.service";
import {HttpModule} from "@angular/http";


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let expectedHero: Hero;
  let de: DebugElement;
  let heroEl: HTMLElement;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      providers: [{
        provide: HeroService,
        useClass: HeroService
      }],
      declarations: [ DashboardComponent, HeroSearchComponent ]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    //de  = fixture.debugElement.query(By.css('.card-header')); // find hero element
    //heroEl = de.nativeElement;
    // pretend that it was wired to something that supplied a hero
    expectedHero = new Hero(42, 'Test Name');
    component.heroes.push(expectedHero);
    fixture.detectChanges(); // tri
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should display hero name', () => {
    const expectedPipedName = expectedHero.name.toUpperCase();
    expect(heroEl.textContent).toContain(expectedPipedName);
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
  */
});
