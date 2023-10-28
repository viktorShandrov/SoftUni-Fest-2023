import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUnsuccessfullComponent } from './payment-unsuccessfull.component';

describe('PaymentUnsuccessfullComponent', () => {
  let component: PaymentUnsuccessfullComponent;
  let fixture: ComponentFixture<PaymentUnsuccessfullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentUnsuccessfullComponent]
    });
    fixture = TestBed.createComponent(PaymentUnsuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
