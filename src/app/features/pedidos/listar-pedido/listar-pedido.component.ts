import { Component, Input, OnInit } from '@angular/core';
import { PedidoService } from '../service/pedido.service';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Pagamento } from '../models/pagamento';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { TableHeader } from 'src/app/shared/components/table/table-header';
import { Usuario } from '../../usuarios/usuario';
import { Role } from 'src/app/shared/models/enums/role';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.scss']
})
export class ListarPedidoComponent implements OnInit{
  data: any[] = [];
  status : any[] = [];
  orderId: number = 0;


  p: Pedido = new Pedido(
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
  @Input() isErro: boolean = true;
  @Input() mensagem: string = '';

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe(
      (response: any[]) => {
        this.data = response;
        this.status = this.data.map((pedido) => pedido.status);
        console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  handleEditButtonClick(item: any) {
    this.mensagem = 'Pedido não pode ser editado pois já foi finalizado!';
    this.isErro = true;
  }

  handleEditButtonEndClick(item: any) {
    this.mensagem = 'Pedido não pode ser finalizado pois já foi finalizado!';
    this.isErro = true;
  }


  apiUrlPath(){
    return 'http://localhost:8080/api/pedido/all';  
  }

  callHeaders(){
    let tableHeaders : TableHeader[] = [];
    tableHeaders.push(new TableHeader('Cliente', 'cliente.nome'));
    tableHeaders.push(new TableHeader('Funcionario', 'usuario.nome'));
    tableHeaders.push(new TableHeader('Data','cadastro'));
    tableHeaders.push(new TableHeader('Forma de Retirada','formaDeEntrega'));
    tableHeaders.push(new TableHeader('Status','status'));
    tableHeaders.push(new TableHeader('ValorTotal','valorTotal'));
    return tableHeaders;
  }


}