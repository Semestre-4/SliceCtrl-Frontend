import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Cliente } from '../../clientes/cliente';
import { Pagamento } from '../models/pagamento';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { NgForm } from '@angular/forms';
import { PedidoService } from '../service/pedido.service';
import { ClienteService } from '../../clientes/service/cliente.service';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Usuario } from '../../usuarios/usario';
import { UsuarioService } from '../../usuarios/service/usuario.service';
import { Role } from 'src/app/shared/models/enums/role';

@Component({
  selector: 'app-pre-pedido',
  templateUrl: './pre-pedido.component.html',
  styleUrls: ['./pre-pedido.component.scss'],
})
export class PrePedidoComponent implements OnInit {
  formasDeRetirada = Object.values(FormaDeEntrega);
  selectedFormaDeRetirada: string = '';

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
  nomeCLiente: string = '';
  nomeFuncionario: string = '';

  @Input() isErro: boolean = true;
  @Input() mensagem: string = '';

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private funcionarioService: UsuarioService,
    private router: Router
  ) {}

  private cpfSubject = new Subject<string>();

  ngOnInit(): void {}

  reformatCPFC() {
    const cpf = this.pedido.cliente.cpf.replace(/\D/g, '');
    this.pedido.cliente.cpf =
      cpf.substring(0, 3) +
      '.' +
      cpf.substring(3, 6) +
      '.' +
      cpf.substring(6, 9) +
      '-' +
      cpf.substring(9);
  }

  reformatCPF() {
    const cpf = this.pedido.usuario.cpf.replace(/\D/g, '');
    this.pedido.usuario.cpf =
      cpf.substring(0, 3) +
      '.' +
      cpf.substring(3, 6) +
      '.' +
      cpf.substring(6, 9) +
      '-' +
      cpf.substring(9);
  }

  getClientByCPF() {
    this.reformatCPFC();
    const cpf = this.pedido.cliente.cpf;
    if(cpf.length == 14){
      this.clienteService.getClientesByCPF(cpf).subscribe({
        next: (cliente) => {
          if (cliente) {
            this.pedido.cliente = cliente;
          }
        }
      });
    }
  }

  getFuncByCPF() {
    this.reformatCPF();
    const cpf = this.pedido.usuario.cpf;
    this.isErro = false;
  
    this.funcionarioService.getUsuarioByCPF(cpf).subscribe({
      next: (funcionario) => {
        console.log(funcionario);
        if (funcionario) {
          this.pedido.usuario = funcionario;
          console.log(this.pedido.usuario);
        }
      }
    });
  
  }

  editClient(){
    this.router.navigate(['/clientes/edit', this.pedido.cliente.enderecos]);
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(this.pedido.usuario);
      this.pedidoService
        .abrirPedido(
          this.pedido.cliente.id,
          this.pedido.usuario.id,
          this.selectedFormaDeRetirada
        )
        .subscribe({
          next: (pedido) => {
           this.router.navigate(['/pedidos/menu-pedido', pedido.id]);
          },
          error: (erro) => {
            if (erro.status === 200) {
              this.router.navigate(['/pedidos/menu-pedido', this.pedido.id]);
            }else{
              this.mensagem = 'Um pedido já foi aberto para esse cliente';
              this.isErro = true;
            }
            }
        });
    }else{
      this.mensagem = 'Preencha todos os campos';
      this.isErro = true;
    }
  }
}
