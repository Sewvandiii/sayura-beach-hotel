import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentUpdateCenterComponent } from './equipment-update-center.component';

describe('EquipmentUpdateCenterComponent', () => {
  let component: EquipmentUpdateCenterComponent;
  let fixture: ComponentFixture<EquipmentUpdateCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentUpdateCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentUpdateCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
