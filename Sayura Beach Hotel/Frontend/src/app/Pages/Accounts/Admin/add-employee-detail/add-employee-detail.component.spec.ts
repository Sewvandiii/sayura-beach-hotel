import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { AddEmployeeDetailComponent } from './add-employee-detail.component';

describe('AddEmployeeDetailComponent', () => {
  let component: AddEmployeeDetailComponent;
  let fixture: ComponentFixture<AddEmployeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
