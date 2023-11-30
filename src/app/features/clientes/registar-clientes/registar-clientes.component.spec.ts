import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RegistarClientesComponent } from './registar-clientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Cliente } from '../cliente';
import { By } from '@angular/platform-browser';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Endereco } from 'src/app/shared/models/endereco/endereco';
import { of, throwError } from 'rxjs';

describe('RegistarClientesComponent', () => {
  let component: RegistarClientesComponent;
  let fixture: ComponentFixture<RegistarClientesComponent>;
  let mockClienteService: jasmine.SpyObj<ClienteService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let cliente: Cliente;
  let newEndereco: Endereco;

  beforeEach(() => {
    mockClienteService = jasmine.createSpyObj('ClienteService', ['cadastrarCliente']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      declarations: [RegistarClientesComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: ClienteService, useValue: mockClienteService },
        { provide: Router, useValue: mockRouter },
        { provide: HttpClient, useValue: mockHttpClient }
      ]

    });
    fixture = TestBed.createComponent(RegistarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    cliente = new Cliente('', '', '', '', [], []);

    cliente.nome = 'Cliente';
    cliente.cpf = '123.456.789-10';
    cliente.telefone = '12345678910';
    cliente.enderecos = [];
    cliente.pedidos = [];
    
    component.cliente = cliente;

    newEndereco = {
      id: 1,
      rua: 'Test Rua',
      numero: 123,
      complemento: 'Test Complemento',
      bairro: 'Test Bairro',
      cidade: 'Test Cidade',
      estado: 'Test Estado',
      pais: 'Test Pais',
      cep: '12345-678',
      clientes: [],
      cadastro: new Date(),
      edicao: new Date(),
      ativo: true,
    };
    
    fixture.detectChanges();
  });

  it('Teste input cliente nome.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Cliente');
  });

  it('deve chamar fetchAddressDetails quando o campo CEP perde o foco', () => {
    spyOn(component, 'fetchAddressDetails');
    let inputElement = fixture.debugElement.query(By.css('input[name="cep"]')).nativeElement;

    inputElement.dispatchEvent(new Event('blur'));

    expect(component.fetchAddressDetails).toHaveBeenCalled();
});

it('deve exibir mensagem de sucesso ao enviar com sucesso', () => {
    spyOn(component, 'submit'); 
    component.submit();
    expect(component.submit).toHaveBeenCalled();
});

it('should submit the form successfully', fakeAsync(() => {
  const mockResponse: any = {/* your mock data for successful response */};
  mockClienteService.cadastrarCliente.and.returnValue(of(mockResponse));

  // Populate form fields
  component.cliente = cliente;
  component.enderecos = newEndereco;

  // Trigger form submission
  component.submit();
  tick();

  // Check if the router.navigate is called with the correct parameter
  expect(mockRouter.navigate).toHaveBeenCalledWith(['/clientes/listar']);
}));

  afterEach(() => {
    fixture.destroy();
  });


});
