import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateEurComponent } from './rate-eur.component';

describe('RateEurComponent', () => {
  let component: RateEurComponent;
  let fixture: ComponentFixture<RateEurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateEurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateEurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
