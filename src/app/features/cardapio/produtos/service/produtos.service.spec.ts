import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { ProdutosService } from './produtos.service';
import { Produtos } from '../produto';

describe('ProdutosService', () => {
  let service: ProdutosService;
  let http: HttpTestingController;
  let produtoService: ProdutosService;
  let newProduto: Produtos;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ProdutosService);
    http = TestBed.inject(HttpTestingController);

    newProduto = {
      id: 1,
      categoria: Categoria.BEBIDAS,
      nomeProduto: 'Test Produto',
      qtdeEstoque: 10,
      preco: 5.99,
      disponivel: true,
      pedidos: [],
      cadastro: new Date(),
      edicao: new Date(), 
      ativo: true,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a produto by id', fakeAsync(() => {
    service.getById(1).subscribe((prod) => {
      expect(prod).toEqual(newProduto);
    });

    const req = http.expectOne('http://localhost:8080/api/produtos/id/1');
    expect(req.request.method).toEqual('GET');
    req.flush(newProduto);
    tick();
  }));

  it('should get all produtos', fakeAsync(() => {
    const expectedProdutos: Produtos[] = [];

    service.getAll().subscribe((produtos) => {
      expect(produtos).toEqual(expectedProdutos);
    });

    const req = http.expectOne('http://localhost:8080/api/produtos/all');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedProdutos);
    tick();
  }));

  it('should get produtos by categoria', fakeAsync(() => {
    const expectedProdutos: Produtos[] = [];

    service.getByCategoria(Categoria.BEBIDAS).subscribe((produtos) => {
      expect(produtos).toEqual(expectedProdutos);
    });

    const req = http.expectOne('http://localhost:8080/api/produtos/categoria/BEBIDAS');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedProdutos);
    tick();
  }));

  it('should edit a produto', fakeAsync(() => {
    service.edit(newProduto).subscribe((result) => {
      expect(result).toBe(200);
    });

    const req = http.expectOne(`http://localhost:8080/api/produtos/${newProduto.id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(200);
    tick();
  }));

  it('should delete a produto', fakeAsync(() => {
    service.delete(newProduto.id).subscribe((result) => {
      expect(result).toBe(200);
    });

    const req = http.expectOne(`http://localhost:8080/api/produtos/${newProduto.id}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(200);
    tick();
  }));

  afterEach(() => {
    http.verify();
  });
});
