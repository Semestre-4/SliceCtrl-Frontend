import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { HttpClientModule } from '@angular/common/http';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
