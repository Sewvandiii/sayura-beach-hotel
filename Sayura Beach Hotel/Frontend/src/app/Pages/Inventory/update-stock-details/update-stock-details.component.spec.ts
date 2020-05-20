import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockDetailsComponent } from './update-stock-details.component';

describe('UpdateStockDetailsComponent', () => {
  let component: UpdateStockDetailsComponent;
  let fixture: ComponentFixture<UpdateStockDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStockDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
