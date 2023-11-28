import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoPizza } from '../../models/pedido-pizza';
import { Router } from '@angular/router';
import { Pizzas } from 'src/app/features/cardapio/pizzas/pizza';
import { Cliente } from 'src/app/features/clientes/cliente';
import { Usuario } from 'src/app/features/usuarios/usario';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Role } from 'src/app/shared/models/enums/role';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Pagamento } from '../../models/pagamento';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-chosen-pizza',
  templateUrl: './chosen-pizza.component.html',
  styleUrls: ['./chosen-pizza.component.scss']
})
export class ChosenPizzaComponent{
  @Input() pedidoPizza = new PedidoPizza(new Pizzas(), [], new Pedido(
    new Cliente('', '', '', '', [], []),
    new Usuario('', '', '', Role.FUNCIONARIO, '', 0, []),
    [],
    [],
    new Pagamento(),
    0,
    0,
    0,
    Status.PENDENTE,
    FormaDeEntrega.LOCAL
  ), 0, '',0);
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

  editarProduto(): void {}

  getFilledSabores(sabores: any[]): any[] {
    const filledSabores = [];
    for (let i = 0; i < 4; i++) {
      const sabor = sabores[i] || null;
      filledSabores.push({ sabor, index: i });
    }
    return filledSabores;
  }
  


}
