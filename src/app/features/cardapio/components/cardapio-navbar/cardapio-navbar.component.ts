import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio-navbar',
  templateUrl: './cardapio-navbar.component.html',
  styleUrls: ['./cardapio-navbar.component.scss']
})
export class CardapioNavbarComponent {

  constructor(private router: Router) { }

  navigateToProdutos() {
      this.router.navigate(['/cardapio/produtos/listar']);
  }
  navigateToPizzas() {
    this.router.navigate(['/cardapio/pizzas/listar']);

  }
  navigateToSabores() {
    this.router.navigate(['/cardapio/sabores/listar']);
  }
  navigateToIngredientes() {
    this.router.navigate(['/cardapio/ingredientes/listar']);
  }
}
