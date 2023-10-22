import { Component } from '@angular/core';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { Pizzas } from '../pizza';
import { PizzasService } from '../service/pizzas.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


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

  constructor(private service: PizzasService, private router: Router, private location: Location){
    const path = location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getProdutoById(this.id);

  }

  getProdutoById(id: string){

    this.service.getById(Number(id)).subscribe({
      next: success => {
        this.pizza = success
      }});
  }

  submit(){
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
            this.mensagem = erro.error.response;
            this.type = 'danger';
          }
      }
      }
    );
  }
}