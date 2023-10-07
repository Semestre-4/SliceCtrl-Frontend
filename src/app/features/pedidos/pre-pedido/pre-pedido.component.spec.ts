import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePedidoComponent } from './pre-pedido.component';

describe('PrePedidoComponent', () => {
  let component: PrePedidoComponent;
  let fixture: ComponentFixture<PrePedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrePedidoComponent]
    });
    fixture = TestBed.createComponent(PrePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
