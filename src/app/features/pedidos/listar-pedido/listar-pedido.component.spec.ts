import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidoComponent } from './listar-pedido.component';

describe('ListarPedidoComponent', () => {
  let component: ListarPedidoComponent;
  let fixture: ComponentFixture<ListarPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPedidoComponent]
    });
    fixture = TestBed.createComponent(ListarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
