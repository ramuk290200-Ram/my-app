import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiComponent } from './upi/upi.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';

const routes: Routes = [
  {path:"upi", component:UpiComponent},
   {path:"card", component:CardpaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
