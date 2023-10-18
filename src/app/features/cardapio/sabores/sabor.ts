import { SideObject } from "@popperjs/core";
import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Ingredientes } from "../ingredientes/ingrediente";
import { PedidoPizza } from "../../pedidos/models/pedido-pizza";

export class Sabores extends AbstractEntity{

    nomeSabor!: string;
    descricao!: string;
    valorAdicional!: number;
    ingredientes!: Ingredientes[];
    pedidoPizza!: PedidoPizza[];

}