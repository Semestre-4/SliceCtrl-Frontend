import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../service/pedido.service';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Funcionario } from '../../funcionarios/funcionario';
import { Pagamento } from '../models/pagamento';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { TableHeader } from 'src/app/shared/components/table/table-header';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.scss']
})
export class ListarPedidoComponent implements OnInit{
  data: any[] = [];


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
    this.pedidoService.getAllPedidos().subscribe(
      (response: any[]) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  

  apiUrlPath(){
    return 'http://localhost:8080/api/pedido/all';  
  }

  callHeaders(){
    let tableHeaders : TableHeader[] = [];
    tableHeaders.push(new TableHeader('Cliente', 'cliente.nome'));
    tableHeaders.push(new TableHeader('Funcionario', 'funcionario.nome'));
    tableHeaders.push(new TableHeader('Data','cadastro'));
    tableHeaders.push(new TableHeader('Forma de Retirada','formaDeEntrega'));
    tableHeaders.push(new TableHeader('Status','status'));
    tableHeaders.push(new TableHeader('ValorTotal','valorTotal'));
    return tableHeaders;
  }


}