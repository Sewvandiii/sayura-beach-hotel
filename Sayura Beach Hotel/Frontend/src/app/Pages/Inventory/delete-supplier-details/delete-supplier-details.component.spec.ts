import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSupplierDetailsComponent } from './delete-supplier-details.component';

describe('DeleteSupplierDetailsComponent', () => {
  let component: DeleteSupplierDetailsComponent;
  let fixture: ComponentFixture<DeleteSupplierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSupplierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSupplierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
