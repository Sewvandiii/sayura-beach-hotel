import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupplierDetailsComponent } from './update-supplier-details.component';

describe('UpdateSupplierDetailsComponent', () => {
  let component: UpdateSupplierDetailsComponent;
  let fixture: ComponentFixture<UpdateSupplierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSupplierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSupplierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
