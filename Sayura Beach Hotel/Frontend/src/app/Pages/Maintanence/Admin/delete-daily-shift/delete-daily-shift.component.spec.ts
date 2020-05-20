import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDailyShiftComponent } from './delete-daily-shift.component';

describe('DeleteDailyShiftComponent', () => {
  let component: DeleteDailyShiftComponent;
  let fixture: ComponentFixture<DeleteDailyShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDailyShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDailyShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
