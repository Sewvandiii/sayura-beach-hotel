import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpDetailsComponent } from './delete-emp-details.component';

describe('DeleteEmpDetailsComponent', () => {
  let component: DeleteEmpDetailsComponent;
  let fixture: ComponentFixture<DeleteEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
