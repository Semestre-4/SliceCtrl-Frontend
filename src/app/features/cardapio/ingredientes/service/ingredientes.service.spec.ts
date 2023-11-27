import { TestBed } from '@angular/core/testing';

import { IngredientesService } from './ingredientes.service';
import { HttpClientModule } from '@angular/common/http';

describe('IngredientesService', () => {
  let service: IngredientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(IngredientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
