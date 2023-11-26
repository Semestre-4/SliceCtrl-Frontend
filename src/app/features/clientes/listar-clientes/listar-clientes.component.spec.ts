import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientesComponent } from './listar-clientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarClientesComponent', () => {
  let component: ListarClientesComponent;
  let fixture: ComponentFixture<ListarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClientesComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
