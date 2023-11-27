import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoPizza } from '../models/pedido-pizza';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../service/pedido.service';
import { FormaDePagamento } from 'src/app/shared/models/enums/forma-pagamento';
import { Endereco } from 'src/app/shared/models/endereco/endereco';
import { ClienteService } from '../../clientes/service/cliente.service';
import { EnderecoService } from 'src/app/shared/models/endereco/service/endereco.service';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.scss']
})
export class FinalizarPedidoComponent implements OnInit {
  clienteInfo: any; 
  funcionarioInfo: any;
  endereco: any;
  produtos: any[] = []; 
  pizzas: PedidoPizza[] = [];
  pedidoId: number = 0;
  formaDePagamento = Object.values(FormaDePagamento);
  selectedFormaDePagamento: string = '';
  isAddressDisabled: boolean = true;
  @Input() isErro: boolean = true;
  @Input() mensagem: string = '';

  constructor(private http: HttpClient,private route:ActivatedRoute,private ps:PedidoService,private cs:ClienteService,private en:EnderecoService,private router:Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.route.params.subscribe(params => {
      if (params && params['id']) {
        this.pedidoId = +params['id'];
        console.log(this.pedidoId);
      }
    });
    this.ps.getPedidoById(this.pedidoId).subscribe({
      next: (pedido) => {
        this.clienteInfo = pedido.cliente;
        this.endereco = pedido.cliente.enderecos[0];
        this.funcionarioInfo = pedido.usuario;
        this.produtos = pedido.produtos;
        this.pizzas = pedido.pizzas;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  enableAddressFields(){
    this.isAddressDisabled = false;
  }

  fetchAddressDetails(cep: string) {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
  
    this.http.get(apiUrl).subscribe((data: any) => {
      this.endereco.rua = data.rua;
      this.endereco.bairro = data.bairro;
      this.endereco.cidade = data.localidade;
      this.endereco.estado = data.uf;
      this.endereco.complemento = data.complemento;
      this.endereco.pais = 'Brasil';
    });
  }
  
  
  disableAddressFields(){
    this.isAddressDisabled = true;
  
    const updatedEndereco = new Endereco(
      this.endereco.rua,
      this.endereco.numero,
      this.endereco.complemento,
      this.endereco.bairro,
      this.endereco.cidade,
      this.endereco.estado,
      this.endereco.pais,
      this.endereco.cep,
);

      if(this.endereco.rua == undefined){
        this.endereco.rua = null;
      }

          this.clienteInfo.enderecos.push(updatedEndereco);
  
          // Update the Cliente with the new Endereco
          this.cs.editarCliente(this.clienteInfo.id, this.clienteInfo).subscribe({
            next: (cliente) => {
              console.log('Cliente updated:', cliente);
            },
            error: (error) => {
              console.log('Error updating Cliente:', error);
            },
          });
  }
  
  finalizarPedido(){
    this.ps.finalizarPedido(this.pedidoId, this.selectedFormaDePagamento).subscribe({
      next: (pedido) => {
        console.log('Pedido finalizado:', pedido);
        this.router.navigate(['/pedidos/listar-pedido']);
        
      },
      error: (error) => {
        if(error.status == 404){
          this.mensagem = 'Preencha a forma de pagamento';
          this.isErro = true;
        }else{
          this.mensagem = 'Pedido não finalizado , tente novamente';
          this.isErro = true;
        }
      },
    });
  }

}
  
