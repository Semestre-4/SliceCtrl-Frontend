import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EditSaborComponent } from './edit-sabor.component';
import { By } from '@angular/platform-browser';
import { Ingredientes } from '../../ingredientes/ingrediente';
import { Sabores } from '../sabor';

describe('EditSaborComponent', () => {
  let component: EditSaborComponent;
  let fixture: ComponentFixture<EditSaborComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSaborComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditSaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    let sabor = new Sabores();
    let ingrediente = new Ingredientes();
    let ingredientes = []; // Inicialize ingredientes como um array vazio
  
    ingrediente.nomeIngrediente = 'Ingrediente';
    ingrediente.qtdeIngrediente = 5;
  
    ingredientes.push(ingrediente);
  
    sabor.nomeSabor = 'Sabor';
    sabor.descricao = 'Descrição';
    sabor.valorAdicional = 5.50;
    sabor.ingredientesDTOS = ingredientes;
  
    component.sabor = sabor;
    fixture.detectChanges();
  });


  it('Teste input sabor nome.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomeSabor"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Sabor');
  });

  it('Teste input qtdeIngrediente.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="descSabor"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Descrição');
  });

  it('Teste input valor adicional sabor.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="valorAdicional"]'));
    expect(elemento.nativeElement.ngModel).toEqual(5.50);
  });

  it('Teste input sabor ingredientes.', () => {
    let ingrediente = new Ingredientes();
    let ingredientes!: Ingredientes[];
    
    ingrediente.nomeIngrediente = 'Ingrediente';
    ingrediente.qtdeIngrediente = 5;

    ingredientes.push(ingrediente);

    let elemento = fixture.debugElement.query(By.css('input[name="ingredientesSabor"]'));
    expect(elemento.nativeElement.ngModel).toEqual(ingredientes);
  });

});
