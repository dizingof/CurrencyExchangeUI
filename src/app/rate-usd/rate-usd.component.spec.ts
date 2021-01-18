import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateUsdComponent } from './rate-usd.component';

describe('RateUsdComponent', () => {
  let component: RateUsdComponent;
  let fixture: ComponentFixture<RateUsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateUsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
