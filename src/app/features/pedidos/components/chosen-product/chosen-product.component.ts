import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produtos } from 'src/app/features/cardapio/produtos/produto';
import { PedidoProduto } from '../../models/pedido-produto';
import { Cliente } from 'src/app/features/clientes/cliente';
import { Usuario } from 'src/app/features/usuarios/usario';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Role } from 'src/app/shared/models/enums/role';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Pagamento } from '../../models/pagamento';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-chosen-product',
  templateUrl: './chosen-product.component.html',
  styleUrls: ['./chosen-product.component.scss']
})
export class ChosenProductComponent {

  @Input() product = new PedidoProduto(
    new Produtos(),
    new Pedido(
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
    ),
    0
  );
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
