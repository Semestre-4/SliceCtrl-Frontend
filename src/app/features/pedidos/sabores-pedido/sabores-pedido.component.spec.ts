import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresPedidoComponent } from './sabores-pedido.component';

describe('SaboresPedidoComponent', () => {
  let component: SaboresPedidoComponent;
  let fixture: ComponentFixture<SaboresPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboresPedidoComponent]
    });
    fixture = TestBed.createComponent(SaboresPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
