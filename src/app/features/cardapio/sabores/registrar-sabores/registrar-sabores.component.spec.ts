import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSaboresComponent } from './registrar-sabores.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('RegistrarSaboresComponent', () => {
  let component: RegistrarSaboresComponent;
  let fixture: ComponentFixture<RegistrarSaboresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSaboresComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(RegistrarSaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
