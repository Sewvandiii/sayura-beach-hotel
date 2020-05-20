import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtablebookingdetailsComponent } from './viewtablebookingdetails.component';

describe('ViewtablebookingdetailsComponent', () => {
  let component: ViewtablebookingdetailsComponent;
  let fixture: ComponentFixture<ViewtablebookingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtablebookingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtablebookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
