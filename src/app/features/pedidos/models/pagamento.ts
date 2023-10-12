import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Pedido } from "./pedido";
import { FormaDePagamento } from "src/app/shared/models/enums/forma-pagamento";

export class Pagamento extends AbstractEntity{
    pedido!: Pedido;
    formaDePagamento!: FormaDePagamento;
    isPago!: boolean;

}