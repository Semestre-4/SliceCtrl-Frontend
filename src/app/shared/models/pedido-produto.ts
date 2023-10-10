import { Pedido } from "src/app/features/pedidos/models/pedido";
import { AbstractEntity } from "./abstract-entity";
import { Produto } from "./produto";

export class PedidoProduto extends AbstractEntity{

    produto!: Produto;
    pedido!: Pedido;
    qtdePedida!: number;
  

}
