import { Component } from '@angular/core';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { Produtos } from '../produto';
import { ProdutosService } from '../service/produtos.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login/login-services/login.service';

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

  constructor(private service: ProdutosService, private router: Router, private loginService: LoginService){}

  submit(){

    let permission: boolean = this.loginService.hasPermission('ADMIN')
    let permission2: boolean = this.loginService.hasPermission('FUNCIONARIO_CHEF');
  
    if(permission || permission2){
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
        if(erro.error.nomeProduto){
          this.mensagem = `${erro.error.nomeProduto}`
        }
        if(erro.error.preco){
          this.mensagem = `${erro.error.preco}`
        }
        if(erro.error.qtdeEstoque){
          this.mensagem = `${erro.error.qtdeEstoque}`
        }
        if(erro.error.disponivel){
          this.mensagem = `${erro.error.disponivel}`
        }
        if(!erro.error.nomeProduto && !erro.error.preco && !erro.error.disponivel && !erro.error.qtdeEstoque){
          this.mensagem = erro.error

        }

        this.type = 'danger';
        }
        }
    });}
    else{
      this.type = 'danger';
      this.mensagem = 'ACESSO NEGADO! Você não tem permissão para realizar essa ação.'
    }
  }
  
}
