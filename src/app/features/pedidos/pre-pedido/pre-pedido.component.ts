import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Funcionario } from '../../funcionarios/funcionario';
import { Pagamento } from '../models/pagamento';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { NgForm } from '@angular/forms';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-pre-pedido',
  templateUrl: './pre-pedido.component.html',
  styleUrls: ['./pre-pedido.component.scss']
})
export class PrePedidoComponent implements OnInit {

  formasDeRetirada = Object.values(FormaDeEntrega);
  selectedFormaDeRetirada: FormaDeEntrega = FormaDeEntrega.CONSUMO_LOCAL;

  pedido: Pedido =
    new Pedido(
      new Cliente('', '', '', '', [], []),
      new Funcionario('', '', '', 0, []),
      [], [],
      new Pagamento(),
      0, 0, 0, Status.PENDENTE,
      FormaDeEntrega.CONSUMO_LOCAL);
   nomeCLiente: string = '';
   nomeFuncionario: string = ''; 
   
   constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
   
  }

  submitForm(form: NgForm) {
    console.log(form);
  }

}

