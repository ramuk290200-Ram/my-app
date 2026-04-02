import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  cartCount: number = 0;

  cartCountsub: BehaviorSubject<number> = new BehaviorSubject(0);
setCount(){


 this.cartCount++;
  this.cartCountsub.next(this.cartCount);
}
  getCount() {
    return this.cartCountsub.asObservable();
  }
  
}


 







