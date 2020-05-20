import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierDetailsComponent } from './suplier-details.component';

describe('SuplierDetailsComponent', () => {
  let component: SuplierDetailsComponent;
  let fixture: ComponentFixture<SuplierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
