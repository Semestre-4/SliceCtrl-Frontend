import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoPizza } from '../../models/pedido-pizza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chosen-pizza',
  templateUrl: './chosen-pizza.component.html',
  styleUrls: ['./chosen-pizza.component.scss']
})
export class ChosenPizzaComponent{
  @Input() pedidoPizza!: PedidoPizza;
  @Output() quantityChanged = new EventEmitter<number>();
  @Output() removeProduct = new EventEmitter<number>();
  @Output() priceCalculated = new EventEmitter<number>();
  @Input() quantity: number = 1;

  constructor(private router: Router) { }

  increaseQuantity(): void {
    this.quantity++;
    this.quantityChanged.emit(this.quantity);
  }

  decreaseQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChanged.emit(this.quantity);
    }
  }

  calculatePrice(): number {
    const price = this.pedidoPizza.pizza.preco * this.quantity;
    this.priceCalculated.emit(price);
    return price;
  }

  removeProduto(): void {
    this.removeProduct.emit(this.pedidoPizza.id);
  }


  getFilledSabores(sabores: any[]): any[] {
    const filledSabores = [];
    for (let i = 0; i < 4; i++) {
      const sabor = sabores[i] || null;
      filledSabores.push({ sabor, index: i });
    }
    return filledSabores;
  }
  


}
