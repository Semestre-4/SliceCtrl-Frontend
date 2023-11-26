import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPedidoComponent } from './new-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewPedidoComponent', () => {
  let component: NewPedidoComponent;
  let fixture: ComponentFixture<NewPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(NewPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
