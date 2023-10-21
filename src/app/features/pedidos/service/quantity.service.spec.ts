import { TestBed } from '@angular/core/testing';

import { QuantityService } from './quantity.service';

describe('QuantityService', () => {
  let service: QuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
