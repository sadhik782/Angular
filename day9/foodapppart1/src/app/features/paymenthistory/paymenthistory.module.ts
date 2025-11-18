import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymenthistoryRoutingModule } from './paymenthistory-routing.module';
console.log("Payment history module got loaded")


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymenthistoryRoutingModule
  ]
})
export class PaymenthistoryModule { }
