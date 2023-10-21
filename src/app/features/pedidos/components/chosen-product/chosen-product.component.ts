import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produtos } from 'src/app/features/cardapio/produtos/produto';
import { QuantityService } from '../../service/quantity.service';

@Component({
  selector: 'app-chosen-product',
  templateUrl: './chosen-product.component.html',
  styleUrls: ['./chosen-product.component.scss']
})
export class ChosenProductComponent {

  @Input() product: any;
  @Output() removeProduct = new EventEmitter<number>();
  @Output() quantityChanged = new EventEmitter<{ productId: number, quantity: number }>();
  @Input() quantity: number = 1;

  constructor(private quantityService: QuantityService){}

  calculatePrice(): number {
    return this.product.preco * this.quantity;
  }

  increaseQuantity(): void {
    this.quantity++;
    this.quantityChanged.emit({ productId: this.product.id, quantity: this.quantity });
    this.updateLocalStorage();
  }

  decreaseQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChanged.emit({ productId: this.product.id, quantity: this.quantity });
      this.updateLocalStorage();
    }
  }

  removeProduto(): void {
    this.removeProduct.emit(this.product.id);
    this.removeFromLocalStorage();
  }

  private removeFromLocalStorage() {
    const pedidoProduto = JSON.parse(localStorage.getItem('pedidoProduto') || '[]');
    const updatedPedidoProduto = pedidoProduto.filter((item: any) => item.productId !== this.product.id && item.quantity > 0);
    localStorage.setItem('pedidoProduto', JSON.stringify(updatedPedidoProduto));
  }

  private updateLocalStorage() {
    const pedidoProduto = JSON.parse(localStorage.getItem('pedidoProduto') || '[]');
    const existingProductIndex = pedidoProduto.findIndex((item: any) => item.productId === this.product.id);

    if (existingProductIndex !== -1) {
      pedidoProduto[existingProductIndex].quantity = this.quantity;
    } else {
      pedidoProduto.push({ productId: this.product.id, quantity: this.quantity });
    }

    localStorage.setItem('pedidoProduto', JSON.stringify(pedidoProduto));
  }
}
