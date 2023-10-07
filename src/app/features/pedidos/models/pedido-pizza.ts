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

    constructor(){
        super();
        this.pizza = new Pizzas();
        this.sabores = [];
        this.pedido = new Pedido();
        this.qtdePedida = 0;
        this.observacao = '';
    }
}