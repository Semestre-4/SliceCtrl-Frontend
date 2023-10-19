import { Component } from '@angular/core';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { Pizzas } from '../pizza';
import { PizzasService } from '../service/pizzas.service';

@Component({
  selector: 'app-registrar-pizzas',
  templateUrl: './registrar-pizzas.component.html',
  styleUrls: ['./registrar-pizzas.component.scss'],
})
export class RegistrarPizzasComponent {

  tamanho!: Tamanho;
  pizza: Pizzas = new Pizzas();

  tamanhoOption = Object.values(Tamanho);

  constructor(private service: PizzasService){}

  submit(){
    this.service.save(this.pizza).subscribe();
  }
}
