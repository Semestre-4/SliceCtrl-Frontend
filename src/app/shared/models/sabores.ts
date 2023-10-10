import { PedidoPizza } from "src/app/features/pedidos/models/pedido-pizza";
import { AbstractEntity } from "./abstract-entity";
import { Ingrediente } from "./ingrediente";

export class Sabores extends AbstractEntity {

    nomeSabor!: string;
    descricao?: string;
    valorAdicional!: number;
    ingredientes!: Ingrediente[];
    pedidosPizza!: PedidoPizza[];
  

}
