import { TestBed } from '@angular/core/testing';

import { PizzasService } from './pizzas.service';
import { HttpClientModule } from '@angular/common/http';

describe('PizzasService', () => {
  let service: PizzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(PizzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
