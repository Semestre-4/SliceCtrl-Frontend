import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RegisterUsuarioComponent } from './register-usuario.component';
import { Usuario } from '../usuario';
import { Role } from 'src/app/shared/models/enums/role';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

describe('RegisterUsuarioComponent', () => {
  let component: RegisterUsuarioComponent;
  let fixture: ComponentFixture<RegisterUsuarioComponent>;
  let mockUsuarioService: jasmine.SpyObj<any>;
  let mockRouter: jasmine.SpyObj<any>;

  beforeEach(() => {
    mockUsuarioService = jasmine.createSpyObj('UsuarioService', ['cadastrarUsuario']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [RegisterUsuarioComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: UsuarioService, useValue: mockUsuarioService },
        { provide: Router, useValue: mockRouter },
      ],
    });
    fixture = TestBed.createComponent(RegisterUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    let usuario: Usuario = new Usuario('', '', '', Role.FUNCIONARIO, '', 0, []);
    usuario.nome = 'Usuario';
    usuario.cpf = '123.456.789-10';
    usuario.password = '123';
    usuario.role = Role.FUNCIONARIO;
    usuario.telefone = '123456789';

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

  it('should submit the form successfully', fakeAsync(() => {
    const mockResponse: any = {/* your mock data for successful response */};
    mockUsuarioService.cadastrarUsuario.and.returnValue(of(mockResponse));
    component.submit();
    tick();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/usuario/listar']);
  }));

  it('deve exibir mensagem de sucesso ao enviar com sucesso', () => {
    spyOn(component, 'submit');
    component.submit();
    expect(component.submit).toHaveBeenCalled();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
