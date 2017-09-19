import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFontawesomeComponent } from './demo-fontawesome.component';

describe('DemoFontawesomeComponent', () => {
  let component: DemoFontawesomeComponent;
  let fixture: ComponentFixture<DemoFontawesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFontawesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFontawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
