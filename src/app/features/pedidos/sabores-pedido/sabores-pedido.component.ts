import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sabores } from '../../cardapio/sabores/sabor';
import { SaboresService } from '../../cardapio/sabores/service/sabores.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { PedidoPizza } from '../models/pedido-pizza';
import { PedidoDataService } from '../service/pedido-data.service';
import { PedidoService } from '../service/pedido.service';
import { Pizzas } from '../../cardapio/pizzas/pizza';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Funcionario } from '../../funcionarios/funcionario';
import { Pagamento } from '../models/pagamento';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';

@Component({
  selector: 'app-sabores-pedido',
  templateUrl: './sabores-pedido.component.html',
  styleUrls: ['./sabores-pedido.component.scss']
})
export class SaboresPedidoComponent implements OnInit {
  loading: boolean = true;
  sabores: Sabores[] = [];
  saboresPermitidos: number = 0;

  pedidoId: number = 0;

  pizza: Pizzas = new Pizzas();

  pedidoPizza: PedidoPizza = new PedidoPizza(new Pizzas(), [], new Pedido(
    new Cliente('', '', '', '', [], []),
    new Funcionario,
    [],
    [],
    new Pagamento(),
    0,
    0,
    0,
    Status.PENDENTE,
    FormaDeEntrega.LOCAL
  ), 0, '',0);

  constructor(
    private saborService: SaboresService,
    private pizzaService: PizzasService,
    private route: ActivatedRoute,
    private router: Router,
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.pedidoId = +params['pedidoId'];
      this.carregarObjetos(+params['pizzaId']);
    });

  }

  carregarObjetos(pizzaId: number) {
    
    this.pizzaService.getById(pizzaId).subscribe({
      next: pizzaInfo => {
        this.pizza = pizzaInfo;
        this.pedidoPizza.valor = this.pizza.preco;
        this.pedidoPizza.pizza = this.pizza;
        this.pedidoPizza.qtdePedida = 1;
        this.saboresPermitidosChanged(this.pizza.tamanho);
        this.loading = false;
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

    if (this.pedidoPizza.sabores == null)
      this.pedidoPizza.sabores = [];

    this.pedidoPizza.sabores.push(sabor);
    this.pedidoPizza.valor += sabor.valorAdicional;
  }

  removeSaborFromPizza(sabor: Sabores) {
    this.pedidoPizza.sabores = this.pedidoPizza.sabores.filter(s => s !== sabor);
    this.pedidoPizza.valor -= sabor.valorAdicional;
  }

  salvar() {

    this.pedidoService.incluirPedidoPizza(this.pedidoPizza, this.pedidoId);
    this.router.navigate(['/pedidos/menu-pedido', this.pedidoId]);
  }

}
