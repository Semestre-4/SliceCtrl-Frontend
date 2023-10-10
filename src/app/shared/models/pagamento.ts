import { Pedido } from "src/app/features/pedidos/models/pedido";
import { AbstractEntity } from "./abstract-entity";
import { FormaDePagamento } from "./enums/forma-pagamento";

export class Pagamento extends AbstractEntity{

    pedido!: Pedido;
    formasDePagamento!: FormaDePagamento;
    isPago!: boolean;
  

}
