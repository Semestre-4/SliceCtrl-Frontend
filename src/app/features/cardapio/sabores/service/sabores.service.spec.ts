import { TestBed } from '@angular/core/testing';

import { SaboresService } from './sabores.service';
import { HttpClientModule } from '@angular/common/http';

describe('SaboresService', () => {
  let service: SaboresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(SaboresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
