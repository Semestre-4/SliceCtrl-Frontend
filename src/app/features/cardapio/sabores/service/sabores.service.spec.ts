import { TestBed } from '@angular/core/testing';

import { SaboresService } from './sabores.service';

describe('SaboresService', () => {
  let service: SaboresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaboresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
