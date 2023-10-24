import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPedidoComponent } from './edit-pedido.component';

describe('EditPedidoComponent', () => {
  let component: EditPedidoComponent;
  let fixture: ComponentFixture<EditPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPedidoComponent]
    });
    fixture = TestBed.createComponent(EditPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
