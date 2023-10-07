import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Pedido } from "../pedidos/models/pedido";
import { Endereco } from "src/app/shared/models/endereco";

export class Cliente extends AbstractEntity {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    pedidos: Pedido[];
    enderecos: Endereco[];

    constructor(nome: string, cpf: string, telefone: string, email: string, pedidos: Pedido[], enderecos: Endereco[]) {
        super();
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.pedidos = pedidos;
        this.enderecos = enderecos;
    }
}