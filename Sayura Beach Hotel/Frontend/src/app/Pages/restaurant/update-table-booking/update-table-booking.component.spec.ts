import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTableBookingComponent } from './update-table-booking.component';

describe('UpdateTableBookingComponent', () => {
  let component: UpdateTableBookingComponent;
  let fixture: ComponentFixture<UpdateTableBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTableBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTableBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
