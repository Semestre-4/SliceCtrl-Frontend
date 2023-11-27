import { TestBed } from '@angular/core/testing';

import { PedidoService } from './pedido.service';
import { HttpClientModule } from '@angular/common/http';

describe('PedidoService', () => {
  let service: PedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
