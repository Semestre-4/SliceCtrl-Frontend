import { Component } from '@angular/core';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { Pizzas } from '../pizza';
import { PizzasService } from '../service/pizzas.service';
import { Router } from '@angular/router';

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

  constructor(private service: PizzasService, private router: Router){}

  submit(){
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
            this.mensagem = erro.error.response;
            this.type = 'danger';
          }
      }
      }
    );
  }
}
