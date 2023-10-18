import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Tamanho } from "src/app/shared/models/enums/tamanho-pizza";
import { Pedido } from "../../pedidos/models/pedido";

export class Pizzas extends AbstractEntity{
    
    tamanho!: Tamanho;
    preco!: number;
    descricao!: string;
    pedidos!: Pedido[];
    disponivel!: boolean;

}