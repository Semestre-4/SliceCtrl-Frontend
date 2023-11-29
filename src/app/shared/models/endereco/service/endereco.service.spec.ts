import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EnderecoService } from './endereco.service';
import { Endereco } from '../endereco';

describe('EnderecoService', () => {
  let service: EnderecoService;
  let http: HttpTestingController;
  let newEndereco: Endereco;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [EnderecoService],
    });

    // Inject the service and the test controller for HTTP requests
    service = TestBed.inject(EnderecoService);
    http = TestBed.inject(HttpTestingController);

    // Initialize a sample Endereco object for testing
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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an endereco by id', fakeAsync(() => {
    service.getById(1).subscribe((endereco) => {
      expect(endereco).toEqual(newEndereco);
    });

    const req = http.expectOne('http://localhost:8080/api/enderecos/id/1');
    expect(req.request.method).toEqual('GET');
    req.flush(newEndereco);
    tick();
  }));

  it('should get all enderecos', fakeAsync(() => {
    const expectedEnderecos: Endereco[] = [newEndereco];

    service.getAll().subscribe((enderecos) => {
      expect(enderecos).toEqual(expectedEnderecos);
    });

    const req = http.expectOne('http://localhost:8080/api/enderecos/all');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedEnderecos);
    tick();
  }));

  it('should get enderecos by cep', fakeAsync(() => {
    const expectedEnderecos: Endereco[] = [newEndereco];

    service.getByCep('12345-678').subscribe((enderecos) => {
      expect(enderecos).toEqual(expectedEnderecos);
    });

    const req = http.expectOne('http://localhost:8080/api/enderecos/cep/12345-678');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedEnderecos);
    tick();
  }));

  it('should save an endereco', fakeAsync(() => {
    service.save(newEndereco).subscribe((result) => {
      expect(result).toBe(200);
    });

    const req = http.expectOne('http://localhost:8080/api/enderecos');
    expect(req.request.method).toEqual('POST');
    req.flush(200);
    tick();
  }));

  it('should edit an endereco', fakeAsync(() => {
    service.edit(newEndereco).subscribe((result) => {
      expect(result).toBe(200);
    });

    const req = http.expectOne(`http://localhost:8080/api/enderecos/${newEndereco.id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(200);
    tick();
  }));

  it('should delete an endereco', fakeAsync(() => {
    service.delete(1).subscribe((result) => {
      expect(result).toBe(200);
    });

    const req = http.expectOne(`http://localhost:8080/api/enderecos/1`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(200);
    tick();
  }));

  afterEach(() => {
    http.verify();
  });
});
