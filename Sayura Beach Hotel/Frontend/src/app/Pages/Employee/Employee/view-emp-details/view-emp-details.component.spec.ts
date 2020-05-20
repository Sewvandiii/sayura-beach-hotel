import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpDetailsComponent } from './view-emp-details.component';

describe('ViewEmpDetailsComponent', () => {
  let component: ViewEmpDetailsComponent;
  let fixture: ComponentFixture<ViewEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
