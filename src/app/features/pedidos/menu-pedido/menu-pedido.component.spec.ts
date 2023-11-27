import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPedidoComponent } from './menu-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormatarPrecoPipe } from 'src/app/shared/pipes/formatar-preco/formatar-preco.pipe';

describe('MenuPedidoComponent', () => {
  let component: MenuPedidoComponent;
  let fixture: ComponentFixture<MenuPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPedidoComponent,FormatarPrecoPipe],
      imports: [HttpClientTestingModule,RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [FormatarPrecoPipe]
    });
    fixture = TestBed.createComponent(MenuPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
