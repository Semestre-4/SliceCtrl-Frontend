import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Pedido } from "../pedidos/models/pedido";

export class Funcionario extends AbstractEntity{
    
    nome!: string;
    cpf!: string;
    telefone!: string;
    salario!: number;
    pedidos!: Pedido[];

}