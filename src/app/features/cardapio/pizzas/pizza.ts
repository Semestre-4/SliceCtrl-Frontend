import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Tamanho } from "src/app/shared/models/enums/tamanho-pizza";
import { Pedido } from "../../pedidos/models/pedido";

export class Pizzas extends AbstractEntity{
    
    tamanho: Tamanho;
    preco: number;
    descricao: string;
    pedidos: Pedido[];
    disponivel: boolean;

    constructor(tamanho: Tamanho, preco: number, descricao: string, pedidos: Pedido[], disponivel: boolean){

        super()

        this.tamanho = tamanho;
        this.preco = preco;
        this.descricao = descricao;
        this.pedidos = pedidos
        this.disponivel = disponivel;

    }

}