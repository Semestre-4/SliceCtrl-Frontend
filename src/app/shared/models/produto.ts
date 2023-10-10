import { PedidoProduto } from "src/app/features/pedidos/models/pedido-produto";
import { AbstractEntity } from "./abstract-entity";
import { Categoria } from "./enums/categoria";

export class Produto extends AbstractEntity{

    nomeProduto!: string;
    categoria!: Categoria;
    qtdeEstoque!: number;
    preco!: number;
    disponivel!: boolean;
    pedidos!: PedidoProduto[];

}
