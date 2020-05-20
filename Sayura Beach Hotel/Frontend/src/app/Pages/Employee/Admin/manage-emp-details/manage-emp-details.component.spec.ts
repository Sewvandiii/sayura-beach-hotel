import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmpDetailsComponent } from './manage-emp-details.component';

describe('ManageEmpDetailsComponent', () => {
  let component: ManageEmpDetailsComponent;
  let fixture: ComponentFixture<ManageEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
