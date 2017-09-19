import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageComponent } from './frontpage.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('FrontpageComponent', () => {
  let component: FrontpageComponent;
  let fixture: ComponentFixture<FrontpageComponent>;
  let de: DebugElement;
  let hel: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageComponent);
    component = fixture.componentInstance;
    de  = fixture.debugElement.query(By.css('.featurette-heading')); // find hero element
    hel = de.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('shold have a featurette heading', () => {
    expect(hel.textContent).toContain('First featurette heading');
  })
});
