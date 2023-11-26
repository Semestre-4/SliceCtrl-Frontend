import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rotaGuardGuard } from './rota-guard.guard';

describe('rotaGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rotaGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
