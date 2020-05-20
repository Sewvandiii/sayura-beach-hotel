import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDailyShiftComponent } from './insert-daily-shift.component';
import { SweetAlert } from 'src/app/Pages/SweetAlert/SweetAlert';

describe('InsertDailyShiftComponent', () => {
  let component: InsertDailyShiftComponent;
  let fixture: ComponentFixture<InsertDailyShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertDailyShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDailyShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
