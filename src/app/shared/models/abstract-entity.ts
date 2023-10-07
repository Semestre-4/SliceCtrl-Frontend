export class AbstractEntity {
  id: number;
  cadastro: Date;
  edicao: Date;
  ativo: boolean;

    constructor() {
        this.id = 0;
        this.cadastro = new Date();
        this.edicao = new Date();
        this.ativo = true;
    }

}