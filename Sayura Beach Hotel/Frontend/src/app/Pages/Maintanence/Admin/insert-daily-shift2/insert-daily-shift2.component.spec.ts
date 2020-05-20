import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDailyShift2Component } from './insert-daily-shift2.component';

describe('InsertDailyShift2Component', () => {
  let component: InsertDailyShift2Component;
  let fixture: ComponentFixture<InsertDailyShift2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertDailyShift2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDailyShift2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
