import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailyShiftComponent } from './view-daily-shift.component';

describe('ViewDailyShiftComponent', () => {
  let component: ViewDailyShiftComponent;
  let fixture: ComponentFixture<ViewDailyShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDailyShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDailyShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
