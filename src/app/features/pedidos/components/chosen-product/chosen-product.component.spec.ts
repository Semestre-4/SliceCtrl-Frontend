import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenProductComponent } from './chosen-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PedidoProduto } from '../../models/pedido-produto';
import { Produtos } from 'src/app/features/cardapio/produtos/produto';
import { Cliente } from 'src/app/features/clientes/cliente';
import { Usuario } from 'src/app/features/usuarios/usuario';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Role } from 'src/app/shared/models/enums/role';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Pagamento } from '../../models/pagamento';
import { Pedido } from '../../models/pedido';

describe('ChosenProductComponent', () => {
  let component: ChosenProductComponent;
  let fixture: ComponentFixture<ChosenProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChosenProductComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ChosenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const pedido: Pedido = new Pedido(
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
  
    const product: PedidoProduto = new PedidoProduto(
      new Produtos(),
      new Pedido(
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
      ),
      0
    );

    // Initialize the 'produto' property
    product.produto = new Produtos();

  
    component.product = product;
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
