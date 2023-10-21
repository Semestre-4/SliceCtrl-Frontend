import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProdutosService } from '../../cardapio/produtos/service/produtos.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Funcionario } from '../../funcionarios/funcionario';
import { Pagamento } from '../models/pagamento';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { PedidoProduto } from '../models/pedido-produto';
import { PedidoPizza } from '../models/pedido-pizza';
import { Produtos } from '../../cardapio/produtos/produto';
import { Pizzas } from '../../cardapio/pizzas/pizza';
import { ChosenPizzaComponent } from '../components/chosen-pizza/chosen-pizza.component';

@Component({
  selector: 'app-menu-pedido',
  templateUrl: './menu-pedido.component.html',
  styleUrls: ['./menu-pedido.component.scss']
})
export class MenuPedidoComponent implements OnInit {
  @Input() options: string[] = [];
  products: any[] = [];
  pizzas: any[] = [];
  filteredProducts: any[] = [];
  filteredPizzas: any[] = [];
  selectedCategory: string = 'Todos';
  searchTerm: string = '';
  pedidoId: number = Number(this.getPedidoIdFromUrl());
  @Input() selectedProduct: any;


  pedido: Pedido = new Pedido(
    new Cliente('', '', '', '', [], []),
    new Funcionario('', '', '', 0, []),
    [],
    [],
    new Pagamento(),
    0,
    0,
    0,
    Status.PENDENTE,
    FormaDeEntrega.LOCAL
  );

  constructor(
    private productService: ProdutosService,
    private pizzaService: PizzasService,
    private pedidoService: PedidoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchPizzas();
    const pedidoId = this.getPedidoIdFromUrl();
    if (pedidoId !== null) {
      this.pedidoService.getPedidoById(pedidoId).subscribe({
        next: (pedido) => {
          this.pedido = pedido;
        },
        error: (error) => {
          console.error('Error fetching pedido: ', error);
        }
      });
    } else {
    }
  }

  getPedidoIdFromUrl(): number | null {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      return +id;
    }
    return null;
  }

  fetchProducts(): void {
    this.productService.getAll().subscribe({
      next: (products) => {
        this.products = [...products.map(product => ({ ...product }))];
        this.filterProducts();
      },
      error: (error) => {
        console.error('Error fetching products: ', error);
      }
    });
  }

  fetchPizzas(): void {
    this.pizzaService.getAll().subscribe({
      next: (pizzas) => {
        this.pizzas = [...pizzas.map(pizza => ({ ...pizza }))];
        this.filterProducts();
      },
      error: (error) => {
        console.error('Error fetching pizzas: ', error);
      }
    });
  }


  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  filterProducts(): void {
    if (this.selectedCategory === 'Todos') {
      this.filteredProducts = this.products;
      this.filteredPizzas = this.pizzas;
    } else if (this.selectedCategory === 'Pizzas') {
      this.filteredProducts = [];
      this.filteredPizzas = this.pizzas;
    }
    else if (this.selectedCategory === 'Outros') {
      this.filteredProducts = this.products.filter(product => product.categoria === Categoria.OUTROS);
      this.filteredPizzas = [];
    } else {
      const categoryEnum = Categoria[this.selectedCategory.toUpperCase() as keyof typeof Categoria];
      this.filteredProducts = this.products.filter(product => product.categoria === categoryEnum);
      this.filteredPizzas = [];
    }
  }

  filterData(searchTerm: string): void {
  }

  addToPedido(product: any): void {
    
  }
  addPizzaToPedido(pizza: any): void {
  }

}