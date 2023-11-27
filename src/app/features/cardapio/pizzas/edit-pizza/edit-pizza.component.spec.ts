import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EditPizzaComponent } from './edit-pizza.component';
import { Pizzas } from '../pizza';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditPizzaComponent', () => {
  let component: EditPizzaComponent;
  let fixture: ComponentFixture<EditPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPizzaComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditPizzaComponent);
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

  it('Teste input tamanho pizza.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="tamanhoPizza"]'));
    expect(elemento.nativeElement.ngModel).toEqual('M');
  });
});
