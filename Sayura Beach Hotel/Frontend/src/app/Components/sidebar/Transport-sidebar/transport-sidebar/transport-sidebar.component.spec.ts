import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSidebarComponent } from './transport-sidebar.component';

describe('TransportSidebarComponent', () => {
  let component: TransportSidebarComponent;
  let fixture: ComponentFixture<TransportSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
