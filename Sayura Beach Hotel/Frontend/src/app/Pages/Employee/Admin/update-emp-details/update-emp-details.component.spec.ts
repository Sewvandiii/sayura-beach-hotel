import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpDetailsComponent } from './update-emp-details.component';

describe('UpdateEmpDetailsComponent', () => {
  let component: UpdateEmpDetailsComponent;
  let fixture: ComponentFixture<UpdateEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
