import { Component } from '@angular/core';
import { PedidoPizza } from '../../models/pedido-pizza';
import { PedidoProduto } from '../../models/pedido-produto';

@Component({
  selector: 'app-chosen-pizza',
  templateUrl: './chosen-pizza.component.html',
  styleUrls: ['./chosen-pizza.component.scss']
})
export class ChosenPizzaComponent {
  receivedPedido: PedidoProduto | PedidoPizza = {} as PedidoProduto | PedidoPizza;

  receivePedido(pedido: PedidoProduto | PedidoPizza): void {
    this.receivedPedido = pedido;
  }
}
