import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClienteService } from './cliente.service';
import { Cliente } from '../cliente';

describe('ClientesService', () => {
  let service: ClienteService;
  let http: HttpTestingController;
  let newCliente: Cliente;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ClienteService);
    http = TestBed.inject(HttpTestingController);

    // Initialize a sample Cliente object for testing
    newCliente = {
      id: 1,
      nome: 'Test Cliente',
      cpf: '12345678901',
      telefone: '123456789',
      pedidos: [],
      enderecos: [],
      cadastro: new Date(), // Provide an appropriate value for cadastro
      edicao: new Date(),   // Provide an appropriate value for edicao
      ativo: true,          // Provide an appropriate value for ativo
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a cliente by id', fakeAsync(() => {
    service.getClienteById(1).subscribe((cliente: Cliente) => {
      expect(cliente).toEqual(newCliente);
    });

    const req = http.expectOne('http://localhost:8080/api/cliente/id/1'); // Adjust the URL
    expect(req.request.method).toEqual('GET');
    req.flush(newCliente);
    tick();
  }));


  it('should get clientes by nome', fakeAsync(() => {
    const expectedClientes: Cliente[] = [newCliente]; 
  
    service.getClientesByNome('Cliente').subscribe((clientes) => {
      expect(clientes).toEqual(expectedClientes);
    });
  
    const req = http.expectOne('http://localhost:8080/api/cliente/nome/Cliente');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedClientes);
    tick();
  }));

  it('should get a cliente by CPF', fakeAsync(() => {
    service.getClientesByCPF('12345678901').subscribe((clientes: Cliente) => {
      expect(clientes).toEqual(newCliente);
    });

    const req = http.expectOne('http://localhost:8080/api/cliente/12345678901'); // Adjust the URL
    expect(req.request.method).toEqual('GET');
    req.flush(newCliente);
    tick();
  }));

  it('should get all clientes', fakeAsync(() => {
    const expectedClientes: Cliente[] = [newCliente];
  
    service.getAllClientes().subscribe((clientes) => {
      expect(clientes).toEqual(expectedClientes);
    });
  
    const req = http.expectOne('http://localhost:8080/api/cliente/all'); // Adjust the URL
    expect(req.request.method).toEqual('GET');
    req.flush(expectedClientes);
    tick();
  }));
  

  it('should register a new cliente', fakeAsync(() => {
    service.cadastrarCliente(newCliente).subscribe((result :string) => {
      expect(result).toBe('success'); // Adjust based on your API response
    });

    const req = http.expectOne('http://localhost:8080/api/cliente'); // Adjust the URL
    expect(req.request.method).toEqual('POST');
    req.flush('success'); // Adjust based on your expected API response
    tick();
  }));

  it('should edit a cliente', fakeAsync(() => {
    service.editarCliente(1, newCliente).subscribe((result :string) => {
      expect(result).toBe('success'); // Adjust based on your API response
    });

    const req = http.expectOne(`http://localhost:8080/api/cliente/${newCliente.id}`); // Adjust the URL
    expect(req.request.method).toEqual('PUT');
    req.flush('success'); // Adjust based on your expected API response
    tick();
  }));

  it('should delete a cliente', fakeAsync(() => {
    service.excluirCliente(1).subscribe((result :string) => {
      expect(result).toBe('success'); // Adjust based on your API response
    });

    const req = http.expectOne(`http://localhost:8080/api/cliente/1`); // Adjust the URL
    expect(req.request.method).toEqual('DELETE');
    req.flush('success'); // Adjust based on your expected API response
    tick();
  }));

  afterEach(() => {
    http.verify();
  });
});
