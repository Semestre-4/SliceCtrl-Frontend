import { Sabores } from "src/app/features/cardapio/sabores/sabor";
import { AbstractEntity } from "./abstract-entity";

export class Ingrediente extends AbstractEntity{

    nomeIngrediente!: string;
    qtdeIngrediente!: number;
    sabores!: Sabores[];
  

}
