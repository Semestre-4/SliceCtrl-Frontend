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

    constructor() {
        super();
        this.nome = '';
        this.cpf = '';
        this.telefone = '';
        this.email = '';
        this.pedidos = [];
        this.enderecos = [];
    }
}