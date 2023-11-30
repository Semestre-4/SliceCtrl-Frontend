import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidoComponent } from './listar-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarPedidoComponent', () => {
  let component: ListarPedidoComponent;
  let fixture: ComponentFixture<ListarPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
