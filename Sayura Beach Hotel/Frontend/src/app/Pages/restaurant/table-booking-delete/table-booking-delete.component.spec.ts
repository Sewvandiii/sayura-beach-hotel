import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBookingDeleteComponent } from './table-booking-delete.component';

describe('TableBookingDeleteComponent', () => {
  let component: TableBookingDeleteComponent;
  let fixture: ComponentFixture<TableBookingDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBookingDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBookingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
