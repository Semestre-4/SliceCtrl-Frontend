import { Component, OnInit, Input, ViewChild, Output, ChangeDetectorRef } from '@angular/core';
import { ProdutosService } from '../../cardapio/produtos/service/produtos.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Funcionario } from '../../funcionarios/funcionario';
import { Pagamento } from '../models/pagamento';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Pizzas } from '../../cardapio/pizzas/pizza';
import { Produtos } from '../../cardapio/produtos/produto';
import { PedidoProduto } from '../models/pedido-produto';
import { QuantityService } from '../service/quantity.service';

@Component({
  selector: 'app-menu-pedido',
  templateUrl: './menu-pedido.component.html',
  styleUrls: ['./menu-pedido.component.scss']
})
export class MenuPedidoComponent implements OnInit {

  // Properties
  products: any[] = [];
  pizzas: any[] = [];
  pizzaSelected: Pizzas[] = [];
  productsSelected: Produtos[] = [];
  filteredProducts: any[] = [];
  filteredPizzas: any[] = [];
  pedidoProduto: PedidoProduto[] = [];
  selectedCategory: string = 'Todos';
  searchTerm: string = '';
  quantity: number = 0;

  @Input() selectedProduct: Produtos = new Produtos();
  @Input() options: string[] = [];
  valorPedido: number = 0;
  valorEntrega: number = 15.00;
  valorTotal: number = 0;
  calculatedPrices: number[] = [];
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
    private route: ActivatedRoute,
    private quantityService: QuantityService,
    private cdr: ChangeDetectorRef
  ) {}

  // Initialize component
  ngOnInit(): void {
    this.fetchData(); // Fetches products and pizzas
    this.loadStoredData(); // Loads stored products and pedidoProduto from local storage
    this.subscribeToQuantityChanges(); // Subscribes to quantity changes
    this.updatePedidoProduto(this.selectedProduct.id, this.quantity); // Updates pedidoProduto
    this.calculateValorPedido(); // Calculates valorPedido
  }

  // Fetches products and pizzas
  fetchData(): void {
    this.fetchProducts();
    this.fetchPizzas();

    const pedidoId = this.getPedidoIdFromUrl();
    if (pedidoId !== null) {
      this.loadPedidoById(pedidoId);
    }
  }

  // Loads stored products and pedidoProduto from local storage
  loadStoredData(): void {
    const storedProductsSelected = JSON.parse(localStorage.getItem('productsSelected') || '[]');
    this.productsSelected = storedProductsSelected;

    const storedPedidoProduto = JSON.parse(localStorage.getItem('pedidoProduto') || '[]');
    this.pedidoProduto = storedPedidoProduto.map((item: any) => {
      return {
        productId: item.productId,
        quantity: item.quantity
      };
    });
  }

  // Subscribes to quantity changes
  subscribeToQuantityChanges(): void {
    this.quantityService.quantity$.subscribe(quantity => {
      this.quantity = quantity;
    });
  }

  // Updates pedidoProduto with new quantity
  updatePedidoProduto = (productId: number, newQuantity: number) => {
    const pedidoProductIndex = this.pedidoProduto.findIndex(product => product.id === productId);

    if (pedidoProductIndex !== -1) {
      this.pedidoProduto[pedidoProductIndex].qtdePedida = newQuantity;
    }
  }

  // Gets pedido ID from URL
  getPedidoIdFromUrl = (): number | null => {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      return +id;
    }
    return null;
  }

  // Fetches products from service
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

  // Fetches pizzas from service
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

  // Loads pedido by ID
  loadPedidoById(pedidoId: number): void {
    this.pedidoService.getPedidoById(pedidoId).subscribe({
      next: (pedido) => {
        this.pedido = pedido;
      },
      error: (error) => {
        console.error('Error fetching pedido: ', error);
      }
    });
  }

  // Calculates valorPedido
  calculateValorPedido(): void {
    console.log(this.calculatedPrices);
  }

  // Adds price to calculatedPrices
  onPriceCalculated(price: number): void {
    this.calculatedPrices.push(price);
  }

  // Handles category selection
  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  // Filters products based on category
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

  // Filters data based on searchTerm
  filterData(searchTerm: string): void {
    // Implement filtering logic here
  }

  // Adds a product to productsSelected and updates local storage
  addToPedido(product: any): void {
    const pedidoProduct = this.transformProdutoToPedidoProduto(product, this.quantity);
    const isAlreadyAdded = this.productsSelected.some(item => item.id === product.id);

    if (!isAlreadyAdded) {
      this.productsSelected.push(product);
      this.updateLocalStorage();
      this.cdr.detectChanges();
    }
  }

  // Updates local storage with productsSelected
  private updateLocalStorage(): void {
    localStorage.setItem('productsSelected', JSON.stringify(this.productsSelected));
  }

  // Transforms product to PedidoProduto and updates local storage
  transformProdutoToPedidoProduto(product: any, quantity: number): void {
    const pedidoProduct: PedidoProduto = new PedidoProduto(
      product,
      this.pedido,
      quantity
    );
    this.pedidoProduto.push(pedidoProduct);
    console.log(this.pedidoProduto);
    this.updateLocalStorage();
    this.cdr.detectChanges();
  }

  // Adds a pizza to pizzaSelected
  addPizzaToPedido(pizza: any): void {
    this.pizzaSelected.push(pizza);
    console.log(this.pizzaSelected);
  }

  // Removes a product from productsSelected
  removeProdutoFromPedido(id: number): void {
    this.productsSelected = this.productsSelected.filter(product => product.id !== id);
  }
}
