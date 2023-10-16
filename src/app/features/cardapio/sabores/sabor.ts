import { SideObject } from "@popperjs/core";
import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Ingredientes } from "../ingredientes/ingrediente";
import { PedidoPizza } from "../../pedidos/models/pedido-pizza";

export class Sabores extends AbstractEntity{

    nomeSabor: string;
    descricao: string;
    valorAdicional: number;
    ingredientes: Ingredientes[];
    pedidoPizza: PedidoPizza[];

    constructor(nomeSabor: string, descricao: string, valorAdicional: number, ingredientes: Ingredientes[], pedidoPizza: PedidoPizza[]){

        super();

        this.nomeSabor = nomeSabor;
        this.descricao = descricao;
        this.valorAdicional = valorAdicional;
        this.ingredientes = ingredientes;
        this.pedidoPizza = pedidoPizza;
    }


}