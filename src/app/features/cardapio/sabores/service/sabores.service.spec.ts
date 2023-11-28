import { TestBed } from '@angular/core/testing';

import { SaboresService } from './sabores.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';

describe('SaboresService', () => {
  let service: SaboresService;
  let http: HttpClient;

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

  it('test get all', () =>{
    let resposta = 'Resposta'
    const spy = spyOn(http, 'get').and.returnValue(of({body: resposta}));
    service.getAll();
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
