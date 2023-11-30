import { Component } from '@angular/core';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { Pizzas } from '../pizza';
import { PizzasService } from '../service/pizzas.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from 'src/app/core/login/login-services/login.service';


@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.scss']
})
export class EditPizzaComponent {

  tamanho!: Tamanho;
  pizza: Pizzas = new Pizzas();

  id!: string;

  tamanhoOption = Object.values(Tamanho);

    
  mensagem: string = '';
  type: string ='';

  constructor(private service: PizzasService, private router: Router, private location: Location, private loginService: LoginService){
    const path = location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getPizzaById(this.id);

  }

  getPizzaById(id: string){

    this.service.getById(Number(id)).subscribe({
      next: success => {
        this.pizza = success
      }});
  }

  submit(){

    let permission: boolean = this.loginService.hasPermission('ADMIN')
    let permission2: boolean = this.loginService.hasPermission('FUNCIONARIO_CHEF');
  
    if(permission || permission2){
  
    this.service.edit(this.pizza).subscribe(
      {
        next: (i) => { 
          this.mensagem = 'Editado com sucesso!';
          this.type = 'success';
  
          setTimeout(() => {this.router.navigate(["/cardapio/pizzas/listar"])}, 1000 )  
        },
        error: erro => {
          if (erro.status == 200) {
            this.mensagem = 'Editado com sucesso!';
            this.type = 'success';
            setTimeout(() => {this.router.navigate(["/cardapio/pizzas/listar"])}, 1000 )  
          }else{
            if(erro.error.tamanho){
              this.mensagem = `${erro.error.tamanho}`
            }
            if(erro.error.preco){
              this.mensagem = `${erro.error.preco}`
            }
  
            if(!erro.error.tamanho && !erro.error.preco){
              this.mensagem = erro.error
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