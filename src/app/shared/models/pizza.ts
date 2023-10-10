import { PedidoPizza } from "src/app/features/pedidos/models/pedido-pizza";
import { AbstractEntity } from "./abstract-entity";
import { Tamanho } from "./enums/tamanho-pizza";

export class Pizza extends AbstractEntity{

    tamanho!: Tamanho;
    preco!: number;
    discricao?: string;
    pedidos!: PedidoPizza[];
    disponivel!: boolean;
  

}
