import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../service/pedido.service';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Funcionario } from '../../funcionarios/funcionario';
import { Pagamento } from '../models/pagamento';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.scss']
})
export class ListarPedidoComponent implements OnInit{
  data: any[] = [];
  tableHeaders: string[] = [];

  p: Pedido = new Pedido(
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

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe((response: any[]) => {
      this.data = response;
    });
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'PENDENTE':
        return 'badge-yellow'; 
      case 'PAGO':
        return 'badge-green';
      case 'CANCELADO':
        return 'badge-red';
      case 'TODOS':
        return 'badge-danger';
      default:
        return '';
    }
  }
  
}