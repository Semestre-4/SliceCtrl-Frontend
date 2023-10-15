import { Component, OnInit, Input } from '@angular/core';
import { ProdutosService } from '../../cardapio/produtos/service/produtos.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { forkJoin } from 'rxjs';
import { Categoria } from 'src/app/shared/models/enums/categoria';

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
      this.filteredProducts = this.products.filter(product => product.isPizza === true);
    } else {
      const categoryEnum = Categoria[this.selectedCategory.toUpperCase() as keyof typeof Categoria];
      this.filteredProducts = this.products.filter(product => product.categoria === categoryEnum);
    }
  }

  filterData(searchTerm: string): void {
  }
}
