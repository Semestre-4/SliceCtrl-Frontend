import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClienteComponent } from './edit-cliente.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Cliente } from '../cliente';

describe('EditClienteComponent', () => {
  let component: EditClienteComponent;
  let fixture: ComponentFixture<EditClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClienteComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    let client = new Cliente('', '', '', '', [], []);
      client.id= 1,
      client.cadastro= new Date(),
      client.edicao= new Date(),
      client.ativo= true,
      client.nome='John Doe',
      client.cpf='12345678900',
      client.telefone='123-456-7890',
      client.pedidos= [],
      client.enderecos=[]

    component.cliente = client;

    fixture.detectChanges();
  });

  it('should display client information in form fields', async () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.value).toEqual('');
  
    elemento.nativeElement.value = 'John Doe'; 
    elemento.nativeElement.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
  
    expect(component.cliente.nome).toEqual('John Doe'); 
  });

  it('should display client information in form fields for cpf', async () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cpf"]'));
    expect(elemento.nativeElement.value).toEqual('');
  
    elemento.nativeElement.value = '12345678900';
    elemento.nativeElement.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
  
    expect(component.cliente.cpf).toEqual('12345678900');
  });
  
  it('should display client information in form fields for telefone', async () => {
    let elemento = fixture.debugElement.query(By.css('input[name="telefone"]'));
    expect(elemento.nativeElement.value).toEqual('');
  
    elemento.nativeElement.value = '123-456-7890';
    elemento.nativeElement.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
  
    expect(component.cliente.telefone).toEqual('123-456-7890');
  });
  
  
});
