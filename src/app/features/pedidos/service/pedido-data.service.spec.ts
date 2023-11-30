import { TestBed } from '@angular/core/testing';

import { PedidoDataService } from './pedido-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('PedidoDataService', () => {
  let service: PedidoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(PedidoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
