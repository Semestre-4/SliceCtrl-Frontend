import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPedidoComponent } from './menu-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormatarPrecoPipe } from 'src/app/shared/pipes/formatar-preco/formatar-preco.pipe';
import { Endereco } from 'src/app/shared/models/endereco/endereco';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Role } from 'src/app/shared/models/enums/role';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Cliente } from '../../clientes/cliente';
import { Usuario } from '../../usuarios/usario';
import { Pagamento } from '../models/pagamento';
import { Pedido } from '../models/pedido';
import { Pizzas } from '../../cardapio/pizzas/pizza';
import { PedidoPizza } from '../models/pedido-pizza';

describe('MenuPedidoComponent', () => {
  let component: MenuPedidoComponent;
  let fixture: ComponentFixture<MenuPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPedidoComponent,FormatarPrecoPipe],
      imports: [HttpClientTestingModule,RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [FormatarPrecoPipe]
    });
    fixture = TestBed.createComponent(MenuPedidoComponent);
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
    component.pedido = pedido;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update filteredProducts on search', () => {
    // Arrange
    const searchTerm = 'searchTerm';
    
    // Act
    component.onSearch(searchTerm);
    
    // Assert
    expect(component.filteredProducts).toEqual([ ]);
  });

  it('should update filteredProducts on category selection', () => {
    // Arrange
    const selectedCategory = 'selectedCategory';
    
    // Act
    component.onCategorySelected(selectedCategory);
    
    // Assert
    expect(component.filteredProducts).toEqual([ ]);
  });

  it('should remove the selected pizza from pedido on removePizzaFromPedido', () => {
    // Arrange
    const pizzaToRemove = new PedidoPizza(new Pizzas(), [], new Pedido(
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
    ), 0, '',0);
    component.pedido.pizzas.push(pizzaToRemove);
    
    // Act
    component.removePizzaFromPedido(pizzaToRemove.id);
    
    // Assert
    expect(component.pedido.pizzas).not.toContain(pizzaToRemove);
  });

});
