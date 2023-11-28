import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RegistrarProdutosComponent } from './registrar-produtos.component';
import { Produtos } from '../produto';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { By } from '@angular/platform-browser';

describe('RegistrarProdutosComponent', () => {
  let component: RegistrarProdutosComponent;
  let fixture: ComponentFixture<RegistrarProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarProdutosComponent],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(RegistrarProdutosComponent);
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
    fixture.detectChanges(); 
    let elemento = fixture.debugElement.query(By.css('input[name="nomeProduto"]'));
    expect(elemento.nativeElement.value).toEqual('');
  
    elemento.nativeElement.value = 'Produto';
    elemento.nativeElement.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
  
    expect(component.produto.nomeProduto).toEqual('Produto');
  });
  
  it('Teste input categoria.', () => {
    fixture.detectChanges();
    let elemento = fixture.debugElement.query(By.css('select[name="categoriaProduto"]'));
    expect(elemento.nativeElement.value).toEqual(Categoria.BEBIDAS);
  });
  

  it('Teste input preco.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="precoProduto"]'));
    expect(elemento.nativeElement.ngModel).toEqual(29.90);
  });

  it('Teste input qtdeEstoque.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="qtdeEstoque"]'));
    expect(elemento.nativeElement.ngModel).toEqual(5);
  });

  it('deve chamar o método save ao enviar o formulário', fakeAsync(() => { //colocar o fakeAsync toda vez que rolar coisa assíncrona
    spyOn(component, 'submit'); 
    component.submit();
    expect(component.submit).toHaveBeenCalled();
  }));

    
  afterEach(() => {
    fixture.destroy();
  });
});
