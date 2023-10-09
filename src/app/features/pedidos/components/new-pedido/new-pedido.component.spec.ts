import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPedidoComponent } from './new-pedido.component';

describe('NewPedidoComponent', () => {
  let component: NewPedidoComponent;
  let fixture: ComponentFixture<NewPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPedidoComponent]
    });
    fixture = TestBed.createComponent(NewPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
