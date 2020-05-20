import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceEmpDetailsComponent } from './attendance-emp-details.component';

describe('AttendanceEmpDetailsComponent', () => {
  let component: AttendanceEmpDetailsComponent;
  let fixture: ComponentFixture<AttendanceEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
