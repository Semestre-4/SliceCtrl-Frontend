import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPedidoComponent } from './menu-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('MenuPedidoComponent', () => {
  let component: MenuPedidoComponent;
  let fixture: ComponentFixture<MenuPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(MenuPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
