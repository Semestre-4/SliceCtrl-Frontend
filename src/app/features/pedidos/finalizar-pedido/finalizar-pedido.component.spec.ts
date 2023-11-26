import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPedidoComponent } from './finalizar-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FinalizarPedidoComponent', () => {
  let component: FinalizarPedidoComponent;
  let fixture: ComponentFixture<FinalizarPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarPedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FinalizarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
