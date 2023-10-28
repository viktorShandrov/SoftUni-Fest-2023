import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessfullComponent } from './payment-successfull.component';

describe('PaymentSuccessfullComponent', () => {
  let component: PaymentSuccessfullComponent;
  let fixture: ComponentFixture<PaymentSuccessfullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentSuccessfullComponent]
    });
    fixture = TestBed.createComponent(PaymentSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
