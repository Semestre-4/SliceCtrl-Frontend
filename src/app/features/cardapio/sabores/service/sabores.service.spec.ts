import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';
import { SaboresService } from './sabores.service';
import { Sabores } from '../sabor';

describe('SaboresService', () => {
  let service: SaboresService;
  let http: HttpTestingController;
  let saborService: SaboresService;
  let testSabor: Sabores;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(SaboresService);
    http = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    saborService = TestBed.inject(SaboresService);

    testSabor = {
      id: 1,
      nomeSabor: 'Test Sabor',
      descricao: 'Test Descrição',
      valorAdicional: 0,
      ingredientesDTOS: [],
      cadastro: new Date(),
      edicao: new Date(),
      ativo: true,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a sabor by id', fakeAsync(() => {
    saborService.getById(1).subscribe((sabor) => {
      expect(sabor).toEqual(testSabor);
    });

    const req = http.expectOne('http://localhost:8080/api/sabores/id/1');
    expect(req.request.method).toEqual('GET');
    req.flush(testSabor);
    tick();
  }));

  it('should get all sabores', fakeAsync(() => {
    const expectedSabores: Sabores[] = [testSabor];

    saborService.getAll().subscribe((sabores) => {
      expect(sabores).toEqual(expectedSabores);
    });

    const req = http.expectOne('http://localhost:8080/api/sabores/all');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedSabores);
    tick();
  }));

  it('should get sabor by nome', fakeAsync(() => {
    saborService.getByNome('Sabor').subscribe((sabor) => {
      expect(sabor).toEqual(testSabor);
    });

    const req = http.expectOne('http://localhost:8080/api/sabores/nome/Sabor');
    expect(req.request.method).toEqual('GET');
    req.flush(testSabor);
    tick();
  }));

  it('should save a sabor', fakeAsync(() => {
    saborService.save(testSabor).subscribe((result) => {
      expect(result).toBe('success');
    });

    const req = http.expectOne('http://localhost:8080/api/sabores');
    expect(req.request.method).toEqual('POST');
    req.flush('success');
    tick();
  }));

  it('should edit a sabor', fakeAsync(() => {
    const saborToEdit: Sabores = { ...testSabor, nomeSabor: 'Updated Test Sabor' };

    saborService.edit(saborToEdit).subscribe((result) => {
      expect(result).toBe(200);
    });

    const req = http.expectOne(`http://localhost:8080/api/sabores/${saborToEdit.id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(200);
    tick();
  }));

  it('should delete a sabor', fakeAsync(() => {
    const saborIdToDelete = 1;

    saborService.delete(saborIdToDelete).subscribe((result) => {
      expect(result).toBe(200);
    });

    const req = http.expectOne(`http://localhost:8080/api/sabores/${saborIdToDelete}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(200);
    tick();
  }));

  afterEach(() => {
    http.verify();
  });
});
