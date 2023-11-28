import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SaboresService } from './sabores.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';
import { UsuarioService } from 'src/app/features/usuarios/service/usuario.service';
import { Sabores } from '../sabor';

describe('SaboresService', () => {
  let service: SaboresService;
  let http: HttpClient;
  let saborService: SaboresService;
  let newSabor = new Sabores();




  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

    });
    service = TestBed.inject(SaboresService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    saborService = new SaboresService(http);

    newSabor.ativo = true;
    newSabor.cadastro = new Date();
    newSabor.descricao = 'descrição';
    newSabor.id = 1;
    newSabor.nomeSabor = 'Sabor';

  });

  it('should get a sabor by id', fakeAsync(() => {
    const createdSabor$ = saborService.getById(1);
    let createdSabor = new Sabores;
    createdSabor$.subscribe((sabor) => {
      createdSabor = sabor;
    });
    tick(5000); // Adjust the time based on your expected asynchronous operation time
    expect(createdSabor).toBeTruthy(); // Check if the created sabor exists
  }));

});
