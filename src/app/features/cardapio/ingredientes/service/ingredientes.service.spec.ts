import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpStatusCode } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { IngredientesService } from './ingredientes.service';
import { Ingredientes } from '../ingrediente';

describe('IngredientesService', () => {
  let service: IngredientesService;
  let http: HttpTestingController;
  let newIngrediente: Ingredientes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [IngredientesService],
    });
    service = TestBed.inject(IngredientesService);
    http = TestBed.inject(HttpTestingController);

    newIngrediente = {
      id: 1,
      nomeIngrediente: 'Tomato', // Adjust property name
      qtdeIngrediente: 10,
      sabores: [],
      cadastro: new Date(), // Adjust this based on your implementation
      edicao: new Date(),   // Adjust this based on your implementation
      ativo: true,          // Adjust this based on your implementation
    };
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an ingrediente by id', fakeAsync(() => {
    service.getById(1).subscribe((ingrediente) => {
      expect(ingrediente).toEqual(newIngrediente);
    });

    const req = http.expectOne('http://localhost:8080/api/ingredientes/1');
    expect(req.request.method).toEqual('GET');
    req.flush(newIngrediente);
    tick();
  }));

  it('should get all ingredientes', fakeAsync(() => {
    const expectedIngredientes: Ingredientes[] = [newIngrediente];

    service.getAll().subscribe((ingredientes) => {
      expect(ingredientes).toEqual(expectedIngredientes);
    });

    const req = http.expectOne('http://localhost:8080/api/ingredientes/all');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedIngredientes);
    tick();
  }));

  it('should get ingredientes by nome', fakeAsync(() => {
    service.getByNome('Tomato').subscribe((ingrediente) => {
      expect(ingrediente).toEqual(newIngrediente);
    });

    const req = http.expectOne('http://localhost:8080/api/ingredientes/nome/Tomato');
    expect(req.request.method).toEqual('GET');
    req.flush(newIngrediente);
    tick();
  }));

  it('should save an ingrediente', fakeAsync(() => {
    service.save(newIngrediente).subscribe((result) => {
      expect(result).toBe('success');
    });

    const req = http.expectOne('http://localhost:8080/api/ingredientes');
    expect(req.request.method).toEqual('POST');
    req.flush('success');
    tick();
  }));

  it('should edit an ingrediente', fakeAsync(() => {
    service.edit(newIngrediente).subscribe((result) => {
      expect(result).toBe(HttpStatusCode.Ok);
    });

    const req = http.expectOne(`http://localhost:8080/api/ingredientes/${newIngrediente.id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(HttpStatusCode.Ok);
    tick();
  }));

  it('should delete an ingrediente', fakeAsync(() => {
    const ingredienteIdToDelete = 1;

    service.delete(ingredienteIdToDelete).subscribe((result) => {
      expect(result).toBe(HttpStatusCode.NoContent);
    });

    const req = http.expectOne(`http://localhost:8080/api/ingredientes/${ingredienteIdToDelete}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(HttpStatusCode.NoContent);
    tick();
  }));
});
