import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsuarioComponent } from './edit-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Usuario } from '../usario';
import { Role } from 'src/app/shared/models/enums/role';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditUsuarioComponent', () => {
  let component: EditUsuarioComponent;
  let fixture: ComponentFixture<EditUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUsuarioComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    const usuario = new Usuario('', '', '', Role.FUNCIONARIO, '', 0, []);
    usuario.id = 1;
    usuario.nome = 'Usuario';
    usuario.cpf = '123.456.789-10';
    usuario.telefone = '12345678910';
    usuario.role = Role.FUNCIONARIO;
    usuario.password = '123';
    usuario.pedidos = [];
    usuario.salario = 0;

    component.usuario = usuario;

    fixture.detectChanges();
  })


  it('Teste input usuario nome.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Usuario');
  });

  it('Teste input usuario cpf.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cpf"]'));
    expect(elemento.nativeElement.ngModel).toEqual('123.456.789-10');
  });

  it('Teste input usuario telefone.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="telefone"]'));
    expect(elemento.nativeElement.ngModel).toEqual('12345678910');
  });

  it('Teste input usuario senha.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="pass"]'));
    expect(elemento.nativeElement.ngModel).toEqual('123');
  });

  it('Teste input usuario role.', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="role"]'));
    expect(elemento.nativeElement.ngModel).toEqual(Role.FUNCIONARIO);
  });

  
  afterEach(() => {
    fixture.destroy();
  });

});
