import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPedidoComponent } from './finalizar-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Pedido } from '../models/pedido';
import { Pagamento } from '../models/pagamento';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Cliente } from '../../clientes/cliente';
import { Role } from 'src/app/shared/models/enums/role';
import { Usuario } from '../../usuarios/usario';
import { By } from '@angular/platform-browser';
import { Endereco } from 'src/app/shared/models/endereco/endereco';

describe('FinalizarPedidoComponent', () => {
  let component: FinalizarPedidoComponent;
  let fixture: ComponentFixture<FinalizarPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarPedidoComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FinalizarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let pedido: Pedido = new Pedido(
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
    
    pedido.cliente.nome = 'Cliente';
    pedido.cliente.cpf = '123.456.789-10';
    pedido.cliente.telefone = '12345678910';
    pedido.cliente.enderecos = [
      new Endereco('Rua', 123, 'Bairro', 'Cidade', 'Estado', '12345678', 'Complemento', 'Referencia'),
    ];
    pedido.cliente.pedidos = [];

    pedido.usuario.nome = 'Funcionario';
    pedido.usuario.cpf = '123.456.789-10';
    pedido.usuario.telefone = '12345678910';
    pedido.usuario.role = Role.FUNCIONARIO;
    pedido.usuario.pedidos = [];


    component.pedidoId = 1;
    component.clienteInfo = pedido.cliente;
    component.funcionarioInfo = pedido.usuario; 
    component.endereco = pedido.cliente.enderecos[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Teste input cliente nome.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomeCliente"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Cliente');
  });

  it('deve chamar fetchAddressDetails quando o campo CEP perde o foco', () => {
    spyOn(component, 'fetchAddressDetails');
    let inputElement = fixture.debugElement.query(By.css('input[name="cep"]')).nativeElement;

    inputElement.dispatchEvent(new Event('blur'));

    expect(component.fetchAddressDetails).toHaveBeenCalled();
  });



});
