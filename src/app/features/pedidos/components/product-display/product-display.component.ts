import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent {
  @Input() product: any;
  @Output() addToPedido = new EventEmitter<any>();

  addToPedidoClicked() {
    this.addToPedido.emit(this.product);
  }
  
} 
