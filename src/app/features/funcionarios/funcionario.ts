import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Pedido } from "../pedidos/models/pedido";
import { Role } from "src/app/shared/models/enums/role";

export class Usuario extends AbstractEntity{
    
    nome!: string;
    password !: string;
    cpf!: string;
    role!: Role;
    telefone!: string;
    salario!: number;
    pedidos!: Pedido[];

}