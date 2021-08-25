import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelRateComponent } from './fuel-rate.component';

describe('FuelRateComponent', () => {
  let component: FuelRateComponent;
  let fixture: ComponentFixture<FuelRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
