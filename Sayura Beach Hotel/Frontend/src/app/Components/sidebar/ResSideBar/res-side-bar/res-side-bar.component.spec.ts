import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResSideBarComponent } from './res-side-bar.component';

describe('ResSideBarComponent', () => {
  let component: ResSideBarComponent;
  let fixture: ComponentFixture<ResSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
