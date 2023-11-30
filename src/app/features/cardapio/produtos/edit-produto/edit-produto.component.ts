import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Produtos } from '../produto';
import { ProdutosService } from '../service/produtos.service';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login/login-services/login.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.scss']
})

export class EditProdutoComponent {
  id: string;
  categoria!: Categoria;
  produto: Produtos = new Produtos();

  mensagem: string = '';
  type: string ='';

  categoriaOption = Object.values(Categoria);

  constructor(private location: Location, private service: ProdutosService, private router: Router, private loginService: LoginService) {
    const path = location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getProdutoById(this.id);
  }

  ngOnInit() {
  }

  getProdutoById(id: string){

    this.service.getById(Number(id)).subscribe({
      next: success => {
        this.produto = success
      }});
  }

  submit(){
    let permission: boolean = this.loginService.hasPermission('ADMIN')
    let permission2: boolean = this.loginService.hasPermission('FUNCIONARIO_CHEF');
  
    if(permission || permission2){
    this.service.edit(this.produto).subscribe({
      next: (pedido) => {
        this.mensagem = 'Editado com sucesso!';
        this.type = 'success';

        setTimeout(() => {this.router.navigate(["/cardapio/produtos/listar"])}, 1000 )  

      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Editado com sucesso!';
          this.type = 'success';
          setTimeout(() => {this.router.navigate(["/cardapio/produtos/listar"])}, 1000 )  
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