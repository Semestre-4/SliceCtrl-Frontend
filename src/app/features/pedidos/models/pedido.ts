import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Cliente } from "../../clientes/cliente";
import { PedidoProduto } from "./pedido-produto";
import { PedidoPizza } from "./pedido-pizza";
import { Pagamento } from "./pagamento";
import { Status } from "src/app/shared/models/enums/status-pedido";
import { FormaDeEntrega } from "src/app/shared/models/enums/forma-entrega";
import { Usuario } from "../../usuarios/usuario";

export class Pedido extends AbstractEntity {
    cliente: Cliente;
    usuario: Usuario;
    produtos: PedidoProduto[];
    pizzas: PedidoPizza[];
    pagamento: Pagamento;
    valorPedido: number;
    valorEntrega: number;
    valorTotal: number;
    status: Status;
    formaDeEntrega: FormaDeEntrega;

    constructor(cliente: Cliente, usuario: Usuario, produtos: PedidoProduto[], pizzas: PedidoPizza[], pagamento: Pagamento, valorPedido: number, valorEntrega: number, valorTotal: number, status: Status, formaDeEntrega: FormaDeEntrega){
        super();
        this.cliente = cliente;
        this.usuario = usuario;
        this.produtos = produtos;
        this.pizzas = pizzas;
        this.pagamento = pagamento;
        this.valorPedido = valorPedido;
        this.valorEntrega = valorEntrega;
        this.valorTotal = valorTotal;
        this.status = status;
        this.formaDeEntrega = formaDeEntrega;
    }

}