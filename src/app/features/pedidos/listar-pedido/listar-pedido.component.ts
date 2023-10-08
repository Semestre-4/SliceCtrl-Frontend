import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-listar-pedido', 
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.scss']
})
export class ListarPedidoComponent implements OnInit{
  data: any[] = [];
  tableHeaders: string[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe((response: any[]) => {
      this.data = response;
    });
  }

  editarPedido(id: number): void {
  }

  excluirPedido(id: number): void {
  }

  visualizarPedido(id: number): void {
  }

  
}
