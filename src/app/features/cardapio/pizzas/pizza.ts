import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Tamanho } from "src/app/shared/models/enums/tamanho-pizza";

export class Pizzas extends AbstractEntity{
    
    tamanho!: Tamanho;
    preco!: number;
}