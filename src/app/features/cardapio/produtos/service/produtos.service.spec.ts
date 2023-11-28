import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProdutosService } from './produtos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Produtos } from '../produto';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProdutosService', () => {
  let service: ProdutosService;
  let produtoService: ProdutosService;
  let http: HttpClient;
  let newProdutos = new Produtos;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ProdutosService);
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    produtoService = new ProdutosService(http);

    newProdutos.id = 1
    newProdutos.nomeProduto = 'Produto'

  });

  it('should get a produto by id', fakeAsync(() => {
    const expectProd = new Produtos();
    service.getById(1).subscribe((prod) => {
      expect(prod).toEqual(expectProd); // Check if the returned product matches the expected product
    });
    const req = httpTestingController.expectOne('http://localhost:8080/api/produtos/id/1');
    expect(req.request.method).toEqual('GET');
    req.flush(expectProd);
    tick();
  }));
  afterEach(() => {
    httpTestingController.verify();
  });
});
