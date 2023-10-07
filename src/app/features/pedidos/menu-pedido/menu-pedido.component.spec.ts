import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPedidoComponent } from './menu-pedido.component';

describe('MenuPedidoComponent', () => {
  let component: MenuPedidoComponent;
  let fixture: ComponentFixture<MenuPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPedidoComponent]
    });
    fixture = TestBed.createComponent(MenuPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
