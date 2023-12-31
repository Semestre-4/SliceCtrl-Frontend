import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Pizzas } from "../../cardapio/pizzas/pizza";
import { Sabores } from "../../cardapio/sabores/sabor";
import { Pedido } from "./pedido";

export class PedidoPizza extends AbstractEntity{
    pizza: Pizzas;
    sabores: Sabores[];
    pedido: Pedido;
    qtdePedida: number;
    observacao: string;
    valor: number;

    constructor(pizza: Pizzas, sabores: Sabores[], pedido: Pedido, 
        qtdePedida: number, observacao: string, valor: number){
        super();
        this.pizza = pizza;
        this.sabores = sabores;
        this.pedido = pedido;
        this.qtdePedida = qtdePedida;
        this.observacao = observacao;
        this.valor = valor;
    }
}