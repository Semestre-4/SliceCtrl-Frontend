import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Import HttpTestingController from testing module

import { PizzasService } from './pizzas.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pizzas } from '../pizza';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';

describe('PizzasService', () => {
  let service: PizzasService;
  let pizzaService: PizzasService;
  let http: HttpTestingController; // Use HttpTestingController from testing module
  let https: HttpClient
  let newPizza = new Pizzas();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule], // Use HttpClientTestingModule
    });
    service = TestBed.inject(PizzasService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    pizzaService = new PizzasService(https); // Pass HttpTestingController to the service constructor

    newPizza.id = 1;
    newPizza.tamanho = Tamanho.M;
  });

  it('should get a pizza by id', fakeAsync(() => {
    const expectPizza = new Pizzas();
    service.getById(1).subscribe((prod) => {
      expect(prod).toEqual(expectPizza);
    });

    const req = http.expectOne('http://localhost:8080/api/pizza/id/1'); // Use http.expectOne
    expect(req.request.method).toEqual('GET');
    req.flush(expectPizza);
    tick();
  }));

  afterEach(() => {
    http.verify();
  });
});
