import { AbstractEntity } from "./abstract-entity";
import { Cliente } from "./cliente";
import { FormaDePagamento } from "./enums/forma-pagamento";
import { Status } from "./enums/status-pedido";
import { FormaDeEntrega } from "./enums/forma-entrega";
import { PedidoPizza } from "src/app/features/pedidos/models/pedido-pizza";
import { PedidoProduto } from "src/app/features/pedidos/models/pedido-produto";
import { Funcionario } from "./funcionario";
import { Pagamento } from "src/app/features/pedidos/models/pagamento";

export class Pedido extends AbstractEntity {

    cliente!: Cliente;
    funcionario!: Funcionario;
    produtos!: PedidoProduto[];
    pizzas!: PedidoPizza[];
    pagamento?: Pagamento;
    valorPedido!: number;
    valorEntrega!: number;
    valorTotal!: number;
    status!: Status;
    formaDeEntrega!: FormaDeEntrega;
  

}
