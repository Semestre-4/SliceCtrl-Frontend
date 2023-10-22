import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoPizza } from '../../models/pedido-pizza';

@Component({
  selector: 'app-chosen-pizza',
  templateUrl: './chosen-pizza.component.html',
  styleUrls: ['./chosen-pizza.component.scss']
})
export class ChosenPizzaComponent{
  @Input() pedidoPizza: PedidoPizza | any;
  @Output() quantityChanged = new EventEmitter<number>();

  increaseQuantity(): void {
    this.pedidoPizza.qtdePedida++;
    this.quantityChanged.emit(this.pedidoPizza.qtdePedida);
  }

  decreaseQuantity(): void {
    if (this.pedidoPizza.qtdePedida > 1) {
      this.pedidoPizza.qtdePedida--;
      this.quantityChanged.emit(this.pedidoPizza.qtdePedida);
    }
  }

  calcularPreco() {
  }

  excluirProduto() {
    // Implement your logic here for removing a pizza at index
  }

  editarProduto() {
    // Implement your logic here for editing a pizza at index
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
