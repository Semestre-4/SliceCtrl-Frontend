import { Component, OnInit } from '@angular/core';
import { Sabores } from '../../cardapio/sabores/sabor';
import { SaboresService } from '../../cardapio/sabores/service/sabores.service';

@Component({
  selector: 'app-sabores-pedido',
  templateUrl: './sabores-pedido.component.html',
  styleUrls: ['./sabores-pedido.component.scss']
})
export class SaboresPedidoComponent implements OnInit{
  sabores: Sabores[] = []

  constructor(private saborService: SaboresService) {}

  ngOnInit(): void {
   this.saborService.getAll().subscribe({
      next: sabores => {
        this.sabores = sabores;
      },
      error: err => console.log('Error', err)
   })
  }

  addSaborToPizza(sabor: any) {
    console.log('SaborDisplayComponent.addSaborToPizza', sabor);
  }

}
