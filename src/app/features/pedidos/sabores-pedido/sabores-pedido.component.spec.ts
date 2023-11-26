import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresPedidoComponent } from './sabores-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SaboresPedidoComponent', () => {
  let component: SaboresPedidoComponent;
  let fixture: ComponentFixture<SaboresPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboresPedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SaboresPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
