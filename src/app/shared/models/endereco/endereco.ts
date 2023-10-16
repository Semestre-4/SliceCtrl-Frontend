import { Cliente } from "src/app/features/clientes/cliente";
import { AbstractEntity } from "../abstract-entity";

export class Endereco extends AbstractEntity{

    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: string;
    clientes: Cliente[];    

    constructor(    rua: string, numero: number, complemento: string,
        bairro: string,
        cidade: string,
        estado: string,
        pais: string,
        cep: string,
        clientes: Cliente[]    
    ){
    super();

    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;
    this.clientes = clientes;
    }

}