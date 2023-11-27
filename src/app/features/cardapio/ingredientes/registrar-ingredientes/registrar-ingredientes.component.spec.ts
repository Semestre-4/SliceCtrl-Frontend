import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIngredientesComponent } from './registrar-ingredientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('RegistrarIngredientesComponent', () => {
  let component: RegistrarIngredientesComponent;
  let fixture: ComponentFixture<RegistrarIngredientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarIngredientesComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(RegistrarIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
