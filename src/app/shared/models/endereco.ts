import { AbstractEntity } from "./abstract-entity";
import { Cliente } from "./cliente";

export class Endereco extends AbstractEntity{

    rua!: string;
    numero!: number;
    complemento!: string;
    bairro!: string;
    cidade!: string;
    estado!: string;
    pais!: string;
    cep!: string;
    clientes!: Cliente[];    


}