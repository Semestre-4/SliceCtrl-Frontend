import { Component } from '@angular/core';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { Pizzas } from '../pizza';
import { PizzasService } from '../service/pizzas.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login/login-services/login.service';

@Component({
  selector: 'app-registrar-pizzas',
  templateUrl: './registrar-pizzas.component.html',
  styleUrls: ['./registrar-pizzas.component.scss'],
})
export class RegistrarPizzasComponent {

  tamanho!: Tamanho;
  pizza: Pizzas = new Pizzas();

  tamanhoOption = Object.values(Tamanho);

    
  mensagem: string = '';
  type: string ='';

  constructor(private service: PizzasService, private router: Router, private loginService: LoginService){}

  submit(){

    let permission: boolean = this.loginService.hasPermission('ADMIN')
    let permission2: boolean = this.loginService.hasPermission('FUNCIONARIO_CHEF');
  
    if(permission || permission2){
  
    this.service.save(this.pizza).subscribe(
      {
        next: (i) => { 
          this.mensagem = 'Cadastrado com sucesso!';
          this.type = 'success';
  
          this.router.navigate(["/cardapio/pizzas/listar"])        },
        error: erro => {
          if (erro.status == 201) {
            this.mensagem = 'Cadastrado com sucesso!';
            this.type = 'success';
            this.router.navigate(["/cardapio/pizzas/listar"])
            }else{
            if(erro.error.tamanho){
              this.mensagem = erro.error.tamanho;
            }
            if(erro.error.preco){
              this.mensagem = erro.error.preco;
            }
  
            if(!erro.error.tamanho && !erro.error.preco){
              this.mensagem = erro.error;
  
            }
  
            this.type = 'danger';
            }
      }
      }
    );}
    else{
      this.type = 'danger';
      this.mensagem = 'ACESSO NEGADO! Você não tem permissão para realizar essa ação.'
    }
  }
}