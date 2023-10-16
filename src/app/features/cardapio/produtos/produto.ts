import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Categoria } from "src/app/shared/models/enums/categoria";
import { Pedido } from "../../pedidos/models/pedido";

export class Produtos extends AbstractEntity {
    
    nomeProduto: string;
    categoria: Categoria;
    qtdeEstoque: number;
    preco: number;
    disponivel: boolean;
    pedidos: Pedido[];

    constructor(nomeProduto: string, categoria: Categoria, qtdeEstoque: number, preco: number, disponivel: boolean, pedidos: Pedido[]){

        super();

        this.nomeProduto = nomeProduto;
        this.categoria = categoria;
        this.qtdeEstoque = qtdeEstoque;
        this.preco = preco;
        this.disponivel = disponivel;
        this.pedidos = pedidos;

    }

}