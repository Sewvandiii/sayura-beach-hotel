import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipmentComponent } from './delete-equipment.component';

describe('DeleteEquipmentComponent', () => {
  let component: DeleteEquipmentComponent;
  let fixture: ComponentFixture<DeleteEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
