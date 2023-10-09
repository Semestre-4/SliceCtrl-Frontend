import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pedido',
  templateUrl: './new-pedido.component.html',
  styleUrls: ['./new-pedido.component.scss']
})
export class NewPedidoComponent {
  constructor(private router: Router) { }

  navigateToRegister() {
      this.router.navigate(['/pedidos/pre-pedido']);
  }
}
