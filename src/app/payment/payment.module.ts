import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { UpiComponent } from './upi/upi.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';


@NgModule({
  declarations: [
    UpiComponent,
    CardpaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
