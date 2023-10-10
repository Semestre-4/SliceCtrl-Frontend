import { Pedido } from "src/app/features/pedidos/models/pedido";
import { AbstractEntity } from "./abstract-entity";

export class Funcionario extends AbstractEntity{

    nome!: string;
    cpf!: string;
    telefone!: string;
    salario!: number;
    pedidos!: Pedido[];
  

}
