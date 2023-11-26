import { Component, OnInit, Input, ViewChild, Output, ChangeDetectorRef } from '@angular/core';
import { ProdutosService } from '../../cardapio/produtos/service/produtos.service';
import { PizzasService } from '../../cardapio/pizzas/service/pizzas.service';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Pagamento } from '../models/pagamento';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { PedidoProduto } from '../models/pedido-produto';
import { FormatarPrecoPipe } from 'src/app/shared/pipes/formatar-preco/formatar-preco.pipe';
import { Usuario } from '../../usuarios/usario';
import { Role } from 'src/app/shared/models/enums/role';

@Component({
  selector: 'app-menu-pedido',
  templateUrl: './menu-pedido.component.html',
  styleUrls: ['./menu-pedido.component.scss']
})
export class MenuPedidoComponent implements OnInit {

  @Input() isErro: boolean = true;
  @Input() mensagem: string = '';

  // Properties
  products: any[] = [];
  pizzas: any[] = [];
  filteredProducts: any[] = [];
  filteredPizzas: any[] = [];
  selectedCategory: string = 'Todos';
  searchTerm: string = '';
  valorPedido: number = 0;
  valorEntrega: number = 15.00;
  valorTotal: number = 0;
  calculatedPrices: number[] = [];
  pedidoId: number = 0;
  pedido: Pedido = new Pedido(
    new Cliente('', '', '', '', [], []),
    new Usuario('', '', '', Role.FUNCIONARIO, '', 0, []),
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
    private router: Router,
    private pricePipe: FormatarPrecoPipe,
  ) { }

  // Initialize component
  ngOnInit(): void {
    this.fetchData(); // Fetches products and pizzas
    
  }

  // Fetches products and pizzas
  fetchData(): void {
    this.fetchProducts();
    this.fetchPizzas();

    this.pedidoId = Number(this.getPedidoIdFromUrl());
    if (this.pedidoId !== null) {
      this.loadPedidoById(this.pedidoId);
    }

    console.log(this.pedido)

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

        let pedidoAUX = this.pedidoService.verificarPedidoEmAndamento(pedidoId);
        if (pedidoAUX != null) {
          this.pedido = pedidoAUX;
          this.calcularTotalPedido();
        }

      },
      error: (error) => {
        console.error('Error fetching pedido: ', error);
      }
    });
  }

  calcularTotalPedido() {
    if (this.pedido.produtos == null)
      this.pedido.produtos = [];

    if (this.pedido.pizzas == null)
      this.pedido.pizzas = [];

    for (let i = 0; i < this.pedido.pizzas.length; i++) {
      this.valorPedido += this.pedido.pizzas[i].valor * this.pedido.pizzas[i].qtdePedida;
    }
    for (let i = 0; i < this.pedido.produtos.length; i++) {
      this.valorPedido += this.pedido.produtos[i].produto.preco * this.pedido.produtos[i].qtdePedida;
    }

    this.valorTotal = this.valorEntrega + this.valorPedido;
  }

  onSearch(searchTerm: string): void {
    this.filteredProducts = this.products.filter(product => product.nomeProduto.includes(searchTerm));
    this.filteredPizzas = this.pizzas.filter(pizza => pizza.tamanho.includes(searchTerm));
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

  // // Adds a product to productsSelected and updates local storage
  // addToPedido(product: any): void {
  //   const pedidoProduct = this.transformProdutoToPedidoProduto(product, 1);
  //   const isAlreadyAdded = this.pedido.produtos.some(item => item.id === product.id);

  //   if (!isAlreadyAdded) {
  //     this.pedido.produtos.push(pedidoProduct);
  //     this.valorPedido += pedidoProduct.produto.preco; // Add the product price to valorPedido
  //     this.valorTotal = this.valorPedido + this.valorEntrega; // Update valorTotal
  //     this.pricePipe.transform(this.valorTotal);
  //     this.pricePipe.transform(this.valorPedido);
  //   }else{
  //     this.mensagem = 'Produto já adicionado , acresenta a qtde.';
  //     this.isErro = true;
  //   }
  // }

  addToPedido(product: any): void {
    const pedidoProduct = this.transformProdutoToPedidoProduto(product, 1);
    const isAlreadyAddedIndex = this.pedido.produtos.findIndex(item => item.produto.id === product.id);

    if (isAlreadyAddedIndex !== -1) {
        // Product already exists, update quantity
        this.pedido.produtos[isAlreadyAddedIndex].qtdePedida++;
    } else {
        // Product doesn't exist, add new entry
        this.pedido.produtos.push(pedidoProduct);
    }

          this.valorPedido += pedidoProduct.produto.preco; // Add the product price to valorPedido
      this.valorTotal = this.valorPedido + this.valorEntrega; // Update valorTotal
      this.pricePipe.transform(this.valorTotal);
      this.pricePipe.transform(this.valorPedido);

    // // Update valorPedido and valorTotal
    // this.valorPedido += this.pedido.produtos.; // Add the product price to valorPedido
    // this.valorTotal = this.valorPedido + this.valorEntrega; // Update valorTotal
    // this.pricePipe.transform(this.valorTotal);
    // this.pricePipe.transform(this.valorPedido);
}

  // Adds a pizza to pizzaSelected
  addPizzaToPedido(pizza: any): void {
    this.pedidoService.pedidosEmAndamento.push(this.pedido);
    this.router.navigate(['/pedidos/sabores-pedido', this.pedidoId], {
      queryParams: {
        pedidoId: this.pedidoId,
        pizzaId: pizza.id
      }
    });
  }

  // Transforms product to PedidoProduto and updates local storage
  transformProdutoToPedidoProduto(product: any, quantity: number) {
    const pedidoProduct: PedidoProduto = new PedidoProduto(
      product,
      this.pedido,
      quantity
    );
    return pedidoProduct;
  }

  // Removes a product from productsSelected
  removeProdutoFromPedido(idProduto: number): void {
    const index = this.pedido.produtos.findIndex(item => item.id === idProduto);

    if (index !== -1) {
      const removedProduct = this.pedido.produtos.splice(index, 1)[0];
      this.pedido.produtos[index].qtdePedida--;
    
    this.valorPedido -= removedProduct.produto.preco * removedProduct.qtdePedida; // Subtract the removed product's price from valorPedido
    this.valorTotal = this.valorPedido + this.valorEntrega; // Update valorTotal
    }
  }

  // const pedidoProduct = this.transformProdutoToPedidoProduto(product, 1);
  // const isAlreadyAddedIndex = this.pedido.produtos.findIndex(item => item.produto.id === product.id);

  // if (isAlreadyAddedIndex !== -1) {
  //     // Product already exists, update quantity
  //     this.pedido.produtos[isAlreadyAddedIndex].qtdePedida++;
  // } else {
  //     // Product doesn't exist, add new entry
  //     this.pedido.produtos.push(pedidoProduct);
  // }

  // this.valorPedido += pedidoProduct.produto.preco; // Add the product price to valorPedido
  // this.valorTotal = this.valorPedido + this.valorEntrega; // Update valorTotal
  // this.pricePipe.transform(this.valorTotal);
  // this.pricePipe.transform(this.valorPedido);




  // Get quantity of a product
  getQuantity(productId: number): number {
    const storedProductsSelected = JSON.parse(localStorage.getItem('pedidoProduto') || '[]');
    const product = storedProductsSelected.find((item: { productId: number; }) => item.productId === productId);
    return product ? product.quantity : 0;
  }

  onQuantityChanged(newQuantity: number, index: number): void {
    const oldQuantity = this.pedido.produtos[index].qtdePedida;
    const productPrice = this.pedido.produtos[index].produto.preco;

    this.valorPedido += (newQuantity - oldQuantity) * productPrice;
    this.valorTotal = this.valorPedido + this.valorEntrega;

    this.pedido.produtos[index].qtdePedida = newQuantity;
    this.pricePipe.transform(this.valorTotal);
    this.pricePipe.transform(this.valorPedido);
  }

  onQuantityChangedPizza(newQuantity: number, index: number): void {
    const oldQuantity = this.pedido.pizzas[index].qtdePedida;
    const productPrice = this.pedido.pizzas[index].valor;

    this.valorPedido += (newQuantity - oldQuantity) * productPrice;
    this.valorTotal = this.valorPedido + this.valorEntrega;

    this.pedido.pizzas[index].qtdePedida = newQuantity;
    this.pricePipe.transform(this.valorTotal);
    this.pricePipe.transform(this.valorPedido);
  }

  removePizzaFromPedido(idPizza: number): void {
    const index = this.pedido.pizzas.findIndex(item => item.id === idPizza);

    if (index !== -1) {
      const removedProduct = this.pedido.pizzas.splice(index, 1)[0];
      this.valorPedido -= removedProduct.pizza.preco * removedProduct.qtdePedida; // Subtract the removed product's price from valorPedido
      this.valorTotal = this.valorPedido + this.valorEntrega; // Update valorTotal
      this.pricePipe.transform(this.valorTotal);
      this.pricePipe.transform(this.valorPedido);
    }
  }

  onPriceCalculatedPizza(price: number): void {

  }

  //Saves added products and pizzas to pedido on DB
  savePedido(): void {

    this.pedido.produtos.forEach(pedidoProduto => {
      pedidoProduto.pedido = null;
    });

    this.pedidoService.updateOrderByUser(this.pedido).subscribe({
      next: (pedido) => {
       this.router.navigate(['/pedidos/finalizar-pedido', this.pedido.id]);
      },
      error: (erro) => {
        this.mensagem = 'Erro em processar o pedido tente novamente';
        this.isErro = true;
        if (erro.status === 200) {
          this.router.navigate(['/pedidos/finalizar-pedido', this.pedido.id]);
        } else {
          console.log(this.pedido);
        }
      }
    });

    //Loop through productsSelected and foreach product, save it to pedido
    /*this.pedido.produtos.forEach(pedidoProduto => {
      console.log(pedidoProduto);
      console.log(this.pedido.id);

      this.pedidoService.addProdutoToPedido(this.pedido.id, pedidoProduto).subscribe({
        next: (pedido) => {
          console.log(pedido);
          this.router.navigate(['/pedidos/finalizar-pedido', this.pedido.id]);
        },
        error: (erro) => {
          if (erro.status === 200) {
            console.log(erro);
            this.router.navigate(['/pedidos/finalizar-pedido', this.pedido.id]);
          } else {
            console.log(this.pedido);
          }
        }
      });
    });*/

  }
}

