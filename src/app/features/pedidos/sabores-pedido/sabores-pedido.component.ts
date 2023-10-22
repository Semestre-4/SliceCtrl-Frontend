import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sabores } from '../../cardapio/sabores/sabor';
import { SaboresService } from '../../cardapio/sabores/service/sabores.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { PedidoPizza } from '../models/pedido-pizza';
import { PedidoDataService } from '../service/pedido-data.service';

@Component({
  selector: 'app-sabores-pedido',
  templateUrl: './sabores-pedido.component.html',
  styleUrls: ['./sabores-pedido.component.scss']
})
export class SaboresPedidoComponent implements OnInit {
  sabores: Sabores[] = [];
  pizzaId: number = 0;
  pedidoId: number = 0;
  pizzaTamnho: Tamanho = Tamanho.P;
  saboresPermitidos: number = 0;
  saboresSelecionados: Sabores[] = [];
  valorPizza: number = 0;
  observacao: string = '';

  constructor(
    private saborService: SaboresService,
    private pizzaService: PizzasService,
    private route: ActivatedRoute,
    private router: Router,
    private pedidoDataService: PedidoDataService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pedidoId = params['pedidoId'];
      this.pizzaId = params['pizzaId'];
    });

    this.pizzaService.getById(this.pizzaId).subscribe({
      next: pizzaInfo => {
        this.pizzaTamnho = pizzaInfo.tamanho;
        this.saboresPermitidosChanged(this.pizzaTamnho);
        this.valorPizza = pizzaInfo.preco;
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
    switch (pizzaTamnho) {
      case Tamanho.P:
        this.saboresPermitidos = 1;
        break;
      case Tamanho.M:
        this.saboresPermitidos = 2;
        break;
      case Tamanho.G:
        this.saboresPermitidos = 3;
        break;
      default:
        this.saboresPermitidos = 4;
        break;
    }
  }

  addSaborToPizza(sabor: Sabores) {
    this.saboresSelecionados.push(sabor);
    this.valorPizza += sabor.valorAdicional;
  }

  removeSaborFromPizza(sabor: Sabores) {
    this.saboresSelecionados = this.saboresSelecionados.filter(s => s !== sabor);
  }

  salvar(){
    this.pedidoDataService.selectedSabores = this.saboresSelecionados;
    this.pedidoDataService.observacao = this.observacao;
    this.pedidoDataService.pedidoId = this.pedidoId;
    this.pedidoDataService.pizzaId = this.pizzaId;
    this.router.navigate(['/pedidos/menu-pedido', this.pedidoId]);
  }
  
}
