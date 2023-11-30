import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIngredientesComponent } from './listar-ingredientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarIngredientesComponent', () => {
  let component: ListarIngredientesComponent;
  let fixture: ComponentFixture<ListarIngredientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarIngredientesComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListarIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
