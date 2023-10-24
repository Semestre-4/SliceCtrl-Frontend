import { TestBed } from '@angular/core/testing';

import { PedidoDataService } from './pedido-data.service';

describe('PedidoDataService', () => {
  let service: PedidoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
