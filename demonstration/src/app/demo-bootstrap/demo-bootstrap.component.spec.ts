import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBootstrapComponent } from './demo-bootstrap.component';
import { FormsModule } from "@angular/forms";
import { NgbModule, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { NgbdProgressbarLabels } from "./ngbd-progressbar-labels";
import { NgbdModalBasic } from "./Ngbd-modal-basic";

describe('DemoBootstrapComponent', () => {
  let component: DemoBootstrapComponent;
  let fixture: ComponentFixture<DemoBootstrapComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule.forRoot()],

      declarations: [ DemoBootstrapComponent, NgbdModalBasic, NgbdProgressbarLabels ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
