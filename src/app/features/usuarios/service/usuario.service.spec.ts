import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
