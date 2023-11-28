import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUsuarioComponent } from './register-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Usuario } from '../usario';
import { Role } from 'src/app/shared/models/enums/role';
import { Pedido } from '../../pedidos/models/pedido';
import { By } from '@angular/platform-browser';

describe('RegisterUsuarioComponent', () => {
  let component: RegisterUsuarioComponent;
  let fixture: ComponentFixture<RegisterUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUsuarioComponent],
      imports:[HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(RegisterUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    let usuario: Usuario = new Usuario('', '', '', Role.FUNCIONARIO, '', 0, [])
    usuario.nome = 'Usuario';
    usuario.cpf = '123.456.789-10';
    usuario.password = '123';
    usuario.role = Role.FUNCIONARIO;
    usuario.telefone = '123456789'

    component.usuario = usuario;
    fixture.detectChanges();
  });

  it('Teste input nome Usuario.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Usuario');
  });

  it('Teste input CPF Usuario.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cpf"]'));
    expect(elemento.nativeElement.ngModel).toEqual('123.456.789-10');
  });

  it('Teste input senha Usuario.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="pass"]'));
    expect(elemento.nativeElement.ngModel).toEqual('123');
  });

  it('Teste input role Usuario.', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="role"]'));
    expect(elemento.nativeElement.ngModel).toEqual(Role.FUNCIONARIO);
  });
  it('Teste input telefone Usuario.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="telefone"]'));
    expect(elemento.nativeElement.ngModel).toEqual('123456789');
  });

});
