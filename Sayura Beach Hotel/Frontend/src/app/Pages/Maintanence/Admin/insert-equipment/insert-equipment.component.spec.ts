import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEquipmentComponent } from './insert-equipment.component';

describe('InsertEquipmentComponent', () => {
  let component: InsertEquipmentComponent;
  let fixture: ComponentFixture<InsertEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
