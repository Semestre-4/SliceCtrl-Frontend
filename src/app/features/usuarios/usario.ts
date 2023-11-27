import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Pedido } from "../pedidos/models/pedido";
import { Role } from "src/app/shared/models/enums/role";

export class Usuario extends AbstractEntity{
    
    nome: string;
    cpf: string;
    password: string;
    role: Role;
    telefone: string;
    salario: number;
    pedidos: Pedido[];

    constructor(
        nome: string,
        cpf: string,
        password: string,
        role: Role,
        telefone: string,
        salario: number,
        pedidos: Pedido[]
    ){
        super();
        this.nome = nome;
        this.cpf = cpf;
        this.password = password;
        this.role = role;
        this.telefone = telefone;
        this.salario = salario;
        this.pedidos = pedidos;
        
    }
}