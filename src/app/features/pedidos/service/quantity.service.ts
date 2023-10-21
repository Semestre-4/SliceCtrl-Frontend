import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {
  private quantitySubject = new BehaviorSubject<number>(0);
  quantity$ = this.quantitySubject.asObservable();

  updateQuantity(quantity: number) {
    this.quantitySubject.next(quantity);
  }
  
}
