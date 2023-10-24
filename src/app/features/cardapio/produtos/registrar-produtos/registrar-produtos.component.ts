import { Component } from '@angular/core';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { Produtos } from '../produto';
import { ProdutosService } from '../service/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-produtos',
  templateUrl: './registrar-produtos.component.html',
  styleUrls: ['./registrar-produtos.component.scss']
})
export class RegistrarProdutosComponent {

  categoria!: Categoria;
  produto: Produtos = new Produtos();

  mensagem: string = '';
  type: string ='';

  categoriaOption = Object.values(Categoria);

  constructor(private service: ProdutosService, private router: Router){}

  submit(){

    this.service.save(this.produto).subscribe({
      next: (pedido) => {
        this.mensagem = 'Cadastrado com sucesso!';
        this.type = 'success';

        this.router.navigate(["/cardapio/produtos/listar"])

      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Cadastrado com sucesso!';
          this.type = 'success';
          this.router.navigate(["/cardapio/produtos/listar"])
        }else{
          this.mensagem = erro.error;
          this.type = 'danger';
        }
        }
    });
  }
  
}
