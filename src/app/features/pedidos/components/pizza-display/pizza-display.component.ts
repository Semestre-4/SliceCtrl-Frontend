import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizzas } from 'src/app/features/cardapio/pizzas/pizza';

@Component({
  selector: 'app-pizza-display',
  templateUrl: './pizza-display.component.html',
  styleUrls: ['./pizza-display.component.scss']
})
export class PizzaDisplayComponent {
  @Input() pizza:Pizzas =  new Pizzas();
  @Output() addPizzaToPedido = new EventEmitter<any>();

  addToPizzaPedidoClicked() {
    this.addPizzaToPedido.emit(this.pizza);
  }

}