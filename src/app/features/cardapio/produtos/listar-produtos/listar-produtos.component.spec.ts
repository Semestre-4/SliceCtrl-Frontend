import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutosComponent } from './listar-produtos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarProdutosComponent', () => {
  let component: ListarProdutosComponent;
  let fixture: ComponentFixture<ListarProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProdutosComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
