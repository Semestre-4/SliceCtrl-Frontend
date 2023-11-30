import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { Role } from 'src/app/shared/models/enums/role';
import { Usuario } from '../usuario';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let http: HttpTestingController;
  let newUsuario: Usuario;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [UsuarioService],
    });
    service = TestBed.inject(UsuarioService);
    http = TestBed.inject(HttpTestingController);

    newUsuario = {
      id: 1,
      nome: 'John Doe',
      cpf: '12345678901',
      password: 'password',
      role: Role.ADMIN,
      telefone: '123456789',
      salario: 50000,
      pedidos: [],
      cadastro: new Date(),
      edicao: new Date(),
      ativo: true,
    };
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a usuario by id', fakeAsync(() => {
    service.getUsuarioById(1).subscribe((usuario) => {
      expect(usuario).toEqual(newUsuario);
    });
  
    const req = http.expectOne('http://localhost:8080/api/usuario/id/1');
    expect(req.request.method).toEqual('GET');
    req.flush(newUsuario);
    tick();
  }));

  it('should get usuarios by nome', fakeAsync(() => {
    const expectedUsuarios: Usuario[] = [newUsuario];

    service.getUsuariosByNome('John Doe').subscribe((usuarios) => {
      expect(usuarios).toEqual(expectedUsuarios);
    });

    const req = http.expectOne('http://localhost:8080/api/usuario/nome/John Doe');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedUsuarios);
    tick();
  }));

  it('should get usuario by CPF', fakeAsync(() => {
    service.getUsuarioByCPF('12345678901').subscribe((usuario) => {
      expect(usuario).toEqual(newUsuario);
    });

    const req = http.expectOne('http://localhost:8080/api/usuario/cpf/12345678901');
    expect(req.request.method).toEqual('GET');
    req.flush(newUsuario);
    tick();
  }));

  it('should get all usuarios', fakeAsync(() => {
    const expectedUsuarios: Usuario[] = [newUsuario];

    service.getAllUsuarios().subscribe((usuarios) => {
      expect(usuarios).toEqual(expectedUsuarios);
    });

    const req = http.expectOne('http://localhost:8080/api/usuario/all');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedUsuarios);
    tick();
  }));

  it('should cadastrar a usuario', fakeAsync(() => {
    service.cadastrarUsuario(newUsuario).subscribe((result) => {
      expect(result).toBe('success');
    });

    const req = http.expectOne('http://localhost:8080/api/usuario');
    expect(req.request.method).toEqual('POST');
    req.flush('success');
    tick();
  }));

  it('should editar a usuario', fakeAsync(() => {
    service.editarUsuario(newUsuario).subscribe((result) => {
      expect(result).toBe('success');
    });

    const req = http.expectOne(`http://localhost:8080/api/usuario/${newUsuario.id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush('success');
    tick();
  }));

  it('should excluir a usuario', fakeAsync(() => {
    const usuarioIdToDelete = 1;

    service.excluirUsuario(usuarioIdToDelete).subscribe((result) => {
      expect(result).toBe('success');
    });

    const req = http.expectOne(`http://localhost:8080/api/usuario/${usuarioIdToDelete}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush('success');
    tick();
  }));
});
