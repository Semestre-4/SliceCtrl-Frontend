import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produtos } from 'src/app/features/cardapio/produtos/produto';
import { QuantityService } from '../../service/quantity.service';
import { PedidoProduto } from '../../models/pedido-produto';

@Component({
  selector: 'app-chosen-product',
  templateUrl: './chosen-product.component.html',
  styleUrls: ['./chosen-product.component.scss']
})
export class ChosenProductComponent {

  @Input() product!: PedidoProduto;;
  @Output() removeProduct = new EventEmitter<number>();
  @Output() quantityChanged = new EventEmitter<number>();
  @Input() quantity: number = 1;
  @Output() priceCalculated = new EventEmitter<number>();

  calculatePrice(): number {
    const price = this.product.produto.preco * this.quantity;
    this.priceCalculated.emit(price);
    return price;
  }

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

  removeProduto(): void {
    this.removeProduct.emit(this.product.id);
  }

}
