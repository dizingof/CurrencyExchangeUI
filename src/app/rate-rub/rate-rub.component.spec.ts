import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateRubComponent } from './rate-rub.component';

describe('RateRubComponent', () => {
  let component: RateRubComponent;
  let fixture: ComponentFixture<RateRubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateRubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateRubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
