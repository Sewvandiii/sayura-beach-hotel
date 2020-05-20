import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeDetailComponent } from './update-employee-detail.component';

describe('UpdateEmployeeDetailComponent', () => {
  let component: UpdateEmployeeDetailComponent;
  let fixture: ComponentFixture<UpdateEmployeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
