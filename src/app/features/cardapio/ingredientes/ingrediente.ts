import { AbstractEntity } from "src/app/shared/models/abstract-entity";
import { Sabores } from "../sabores/sabor";

export class Ingredientes extends AbstractEntity{

    nomeIngrediente!: string;
    qtdeIngrediente!: number;
    sabores!: Sabores[];

}