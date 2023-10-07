import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPedidoComponent } from './finalizar-pedido.component';

describe('FinalizarPedidoComponent', () => {
  let component: FinalizarPedidoComponent;
  let fixture: ComponentFixture<FinalizarPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarPedidoComponent]
    });
    fixture = TestBed.createComponent(FinalizarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
