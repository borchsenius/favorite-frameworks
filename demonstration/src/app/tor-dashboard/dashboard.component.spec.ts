import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {Hero} from "../tor-hero/hero";
import {By} from "@angular/platform-browser";
import { DebugElement }    from '@angular/core';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let expectedHero: Hero;
  let de: DebugElement;
  let heroEl: HTMLElement;



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    de  = fixture.debugElement.query(By.css('.card-header')); // find hero element
    heroEl = de.nativeElement;
    // pretend that it was wired to something that supplied a hero
    expectedHero = new Hero(42, 'Test Name');
    component.heroes.push(expectedHero);
    fixture.detectChanges(); // tri
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display hero name', () => {
    const expectedPipedName = expectedHero.name.toUpperCase();
    expect(heroEl.textContent).toContain(expectedPipedName);
  });
});
