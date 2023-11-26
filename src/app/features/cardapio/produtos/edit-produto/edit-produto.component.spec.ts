import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EditProdutoComponent } from './edit-produto.component';
import { By } from '@angular/platform-browser';
import { Produtos } from '../produto';
import { Categoria } from 'src/app/shared/models/enums/categoria';

describe('EditProdutoComponent', () => {
  let component: EditProdutoComponent;
  let fixture: ComponentFixture<EditProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProdutoComponent],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(EditProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  beforeEach(() => {
    let produto = new Produtos();
    produto.nomeProduto = 'Produto';
    produto.categoria = Categoria.BEBIDAS;
    produto.preco = 29.90;
    produto.qtdeEstoque = 5;

    component.produto = produto;
    
    fixture.detectChanges();
  });


  it('Teste input produto.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomeProduto"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Produto');
  });

  it('Teste input categoria.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="categoriaProduto"]'));
    expect(elemento.nativeElement.ngModel).toEqual("BEBIDAS");
  });

  it('Teste input preco.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="precoProduto"]'));
    expect(elemento.nativeElement.ngModel).toEqual(29.90);
  });

  it('Teste input qtdeEstoque.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="qtdeEstoque"]'));
    expect(elemento.nativeElement.ngModel).toEqual(5);
  });

});
