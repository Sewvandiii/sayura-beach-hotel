import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDailyShiftComponent } from './update-daily-shift.component';

describe('UpdateDailyShiftComponent', () => {
  let component: UpdateDailyShiftComponent;
  let fixture: ComponentFixture<UpdateDailyShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDailyShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDailyShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
