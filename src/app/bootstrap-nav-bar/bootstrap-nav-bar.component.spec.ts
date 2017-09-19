import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapNavBarComponent } from './bootstrap-nav-bar.component';

describe('BootstrapNavBarComponent', () => {
  let component: BootstrapNavBarComponent;
  let fixture: ComponentFixture<BootstrapNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
