import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Produtos } from "../../cardapio/produtos/produto";
import { Pedido } from "./pedido";

export class PedidoProduto extends AbstractEntity{
    produto: Produtos;
    pedido: Pedido | null;
    qtdePedida: number;

    constructor(produto: Produtos, pedido: Pedido, qtdePedida: number){
        super();
        this.produto = produto;
        this.pedido = pedido;
        this.qtdePedida = qtdePedida;
    }
}