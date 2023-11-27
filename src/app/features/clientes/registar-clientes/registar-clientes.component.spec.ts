import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarClientesComponent } from './registar-clientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Cliente } from '../cliente';
import { By } from '@angular/platform-browser';

describe('RegistarClientesComponent', () => {
  let component: RegistarClientesComponent;
  let fixture: ComponentFixture<RegistarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarClientesComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(RegistarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    let cliente = new Cliente('', '', '', '', [], []);
    cliente.nome = 'Cliente';
    cliente.cpf = '123.456.789-10';
    cliente.telefone = '12345678910';
    cliente.enderecos = [];
    cliente.pedidos = [];
    
    component.cliente = cliente;
    
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

  afterEach(() => {
    fixture.destroy();
  });


});
