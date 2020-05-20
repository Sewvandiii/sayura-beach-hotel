import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStockDetailsComponent } from './delete-stock-details.component';

describe('DeleteStockDetailsComponent', () => {
  let component: DeleteStockDetailsComponent;
  let fixture: ComponentFixture<DeleteStockDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStockDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
