import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProdutosComponent } from './registrar-produtos.component';

describe('RegistrarProdutosComponent', () => {
  let component: RegistrarProdutosComponent;
  let fixture: ComponentFixture<RegistrarProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarProdutosComponent]
    });
    fixture = TestBed.createComponent(RegistrarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
