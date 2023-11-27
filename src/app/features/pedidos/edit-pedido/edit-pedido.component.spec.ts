import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPedidoComponent } from './edit-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditPedidoComponent', () => {
  let component: EditPedidoComponent;
  let fixture: ComponentFixture<EditPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
