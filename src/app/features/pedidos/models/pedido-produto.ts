import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Produtos } from "../../cardapio/produtos/produto";
import { Pedido } from "./pedido";

export class PedidoProduto extends AbstractEntity{
    produto: Produtos;
    pedido: Pedido;
    qtdePedida: number;

    constructor(){
        super();
        this.produto = new Produtos();
        this.pedido = new Pedido();
        this.qtdePedida = 0;
    }
}