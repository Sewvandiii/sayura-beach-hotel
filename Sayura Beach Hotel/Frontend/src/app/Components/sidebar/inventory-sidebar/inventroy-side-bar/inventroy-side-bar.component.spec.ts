import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventroySideBarComponent } from './inventroy-side-bar.component';

describe('InventroySideBarComponent', () => {
  let component: InventroySideBarComponent;
  let fixture: ComponentFixture<InventroySideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventroySideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventroySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
