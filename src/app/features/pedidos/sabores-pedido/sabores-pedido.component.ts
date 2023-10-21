import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sabores } from '../../cardapio/sabores/sabor';
import { SaboresService } from '../../cardapio/sabores/service/sabores.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';

@Component({
  selector: 'app-sabores-pedido',
  templateUrl: './sabores-pedido.component.html',
  styleUrls: ['./sabores-pedido.component.scss']
})
export class SaboresPedidoComponent implements OnInit {
  sabores: Sabores[] = [];
  pizzaId: number = 0;
  pizzaTamnho: Tamanho = Tamanho.P;
  saboresPermitidos: number = 0;

  constructor(
    private saborService: SaboresService,
    private pizzaService: PizzasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pizzaId = params['id'];
    });

    // Use the ID to get pizza information
    this.pizzaService.getById(this.pizzaId).subscribe({
      next: pizzaInfo => {
        this.pizzaTamnho = pizzaInfo.tamanho;
        this.saboresPermitidosChanged(this.pizzaTamnho);
      },
      error: err => console.log('Error', err)
    });

    this.saborService.getAll().subscribe({
      next: sabores => {
        this.sabores = sabores;
      },
      error: err => console.log('Error', err)
    });

  }

  saboresPermitidosChanged(pizzaTamnho: Tamanho) {
    if(pizzaTamnho == Tamanho.P) {
      this.saboresPermitidos = 1;
    } else if(pizzaTamnho == Tamanho.M) {
      this.saboresPermitidos = 2;
    } else if(pizzaTamnho == Tamanho.G) {
      this.saboresPermitidos = 3;
    }else {
      this.saboresPermitidos = 4;
    }
  }

  addSaborToPizza(sabor: any) {
    console.log('SaborDisplayComponent.addSaborToPizza', sabor);
  }
}
