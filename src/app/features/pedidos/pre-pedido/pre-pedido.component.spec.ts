import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { PrePedidoComponent } from './pre-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PrePedidoComponent', () => {
  let component: PrePedidoComponent;
  let fixture: ComponentFixture<PrePedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrePedidoComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule,FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PrePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
