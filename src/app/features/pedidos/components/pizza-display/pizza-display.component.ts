import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pizza-display',
  templateUrl: './pizza-display.component.html',
  styleUrls: ['./pizza-display.component.scss']
})
export class PizzaDisplayComponent {
  @Input() pizza: any;
  @Output() addPizzaToPedido = new EventEmitter<any>();

  addToPizzaPedidoClicked() {
    this.addPizzaToPedido.emit(this.pizza);
  }

}