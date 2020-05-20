import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEmpDetailsComponent } from './work-emp-details.component';

describe('WorkEmpDetailsComponent', () => {
  let component: WorkEmpDetailsComponent;
  let fixture: ComponentFixture<WorkEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
