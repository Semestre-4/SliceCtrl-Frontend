import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SaboresPedidoComponent } from './sabores-pedido.component';

describe('SaboresPedidoComponent', () => {
  let component: SaboresPedidoComponent;
  let fixture: ComponentFixture<SaboresPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboresPedidoComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SaboresPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
