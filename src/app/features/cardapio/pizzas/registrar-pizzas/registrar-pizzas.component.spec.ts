import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RegistrarPizzasComponent } from './registrar-pizzas.component';
import { Pizzas } from '../pizza';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { By } from '@angular/platform-browser';
import { PizzasService } from '../service/pizzas.service';


describe('RegistrarPizzasComponent', () => {
  let component: RegistrarPizzasComponent;
  let fixture: ComponentFixture<RegistrarPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPizzasComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(RegistrarPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  beforeEach(() => {
    let pizza = new Pizzas();
    pizza.preco = 29.90;
    pizza.tamanho = Tamanho.M;
    component.pizza = pizza;
    fixture.detectChanges();
  });


  it('Teste input preço pizza.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="precoPizza"]'));
    expect(elemento.nativeElement.ngModel).toEqual(29.90);
  });

  it('Teste 2 input preço pizza null', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="precoPizza"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });


  it('Teste input tamanho pizza.', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="tamanhoPizza"]'));
    expect(elemento.nativeElement.ngModel).toEqual(Tamanho.M);
  });

  it('Teste 2 input tamanho pizza null', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="tamanhoPizza"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });


  it('deve chamar o método save ao enviar o formulário', fakeAsync(() => { //colocar o fakeAsync toda vez que rolar coisa assíncrona
    spyOn(component, 'submit'); 
    component.submit();
    expect(component.submit).toHaveBeenCalled();
  }));
});
