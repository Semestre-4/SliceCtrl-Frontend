import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProdutosService } from '../../cardapio/produtos/service/produtos.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-menu-pedido',
  templateUrl: './menu-pedido.component.html',
  styleUrls: ['./menu-pedido.component.scss']
})
export class MenuPedidoComponent implements OnInit {
  @Input() options: string[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private productService: ProdutosService,
    private pizzaService: PizzasService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
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
        this.filteredProducts = this.products;
        console.log('Products and Pizzas: ', this.products);
      },
      error: (error) => {
        console.error('Error fetching products and pizzas: ', error);
      }
    });
  }

  onCategorySelected(category: string): void {
    if (category === 'Todos') {
      this.filteredProducts = this.products;
    } else if (category === 'Pizza') {
      this.filteredProducts = this.products.filter(product => product.isPizza);
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
}
