import { Pedido } from "src/app/features/pedidos/models/pedido";
import { AbstractEntity } from "./abstract-entity";
import { Endereco } from "./endereco";

export class Cliente extends AbstractEntity{

    nome!: string;
    cpf!: string;
    telefone!: string;
    email!: string; // O email é opcional
  
    enderecos: Endereco[] = [];
    pedidos: Pedido[] = [];
}
