import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeDetailComponent } from './delete-employee-detail.component';

describe('DeleteEmployeeDetailComponent', () => {
  let component: DeleteEmployeeDetailComponent;
  let fixture: ComponentFixture<DeleteEmployeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
