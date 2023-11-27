import { TestBed } from '@angular/core/testing';

import { ProdutosService } from './produtos.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProdutosService', () => {
  let service: ProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
