import { Pedido } from "src/app/features/pedidos/models/pedido";

import { AbstractEntity } from "./abstract-entity";
import { Pizza } from "./pizza";
import { Sabores } from "./sabores";

export class PedidoPizza extends AbstractEntity {

    pizza!: Pizza;
    sabores!: Sabores[];
    pedido!: Pedido;
    qtdePedida!: number;
    observacao?: string;
  
}
