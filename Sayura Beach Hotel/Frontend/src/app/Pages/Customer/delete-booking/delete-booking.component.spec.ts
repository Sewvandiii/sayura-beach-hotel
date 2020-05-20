import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookingComponent } from './delete-booking.component';

describe('DeleteBookingComponent', () => {
  let component: DeleteBookingComponent;
  let fixture: ComponentFixture<DeleteBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
