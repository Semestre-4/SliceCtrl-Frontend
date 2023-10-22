import { Component, OnInit, Input } from '@angular/core';
import { ProdutosService } from '../../cardapio/produtos/service/produtos.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { forkJoin } from 'rxjs';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Funcionario } from '../../funcionarios/funcionario';
import { Pagamento } from '../models/pagamento';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Status } from 'src/app/shared/models/enums/status-pedido';

@Component({
  selector: 'app-menu-pedido',
  templateUrl: './menu-pedido.component.html',
  styleUrls: ['./menu-pedido.component.scss']
})
export class MenuPedidoComponent implements OnInit {
  @Input() options: string[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory: string = 'Todos';
  searchTerm: string = '';

  pedido: Pedido = new Pedido(
    new Cliente('', '', '', '', [], []),
    new Funcionario(),
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

  private getPedidoIdFromUrl(): number | null {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      return +id;
    }
    return null;
  }

  fetchProducts(): void {
    forkJoin([
      this.productService.getAll(),
      this.pizzaService.getAll()
    ]).subscribe({
      next: ([products, pizzas]) => {
        this.products = [
          ...products.map(product => ({ ...product, category: 'Product', isPizza: false })),
          ...pizzas.map(pizza => ({ ...pizza, category: 'Pizza', isPizza: true }))
        ];
        this.filterProducts();
        console.log('Products and Pizzas: ', this.products);
      },
      error: (error) => {
        console.error('Error fetching products and pizzas: ', error);
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
    } else if (this.selectedCategory === 'Outros') {
      this.filteredProducts = this.products.filter(product => product.categoria === Categoria.OUTROS);
    }else {
      const categoryEnum = Categoria[this.selectedCategory.toUpperCase() as keyof typeof Categoria];
      this.filteredProducts = this.products.filter(product => product.categoria === categoryEnum);
    }
  }

  filterData(searchTerm: string): void {
  }
}
