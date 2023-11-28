import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
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
  
    sabor.id = 1
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

  it('deve chamar o método save ao enviar o formulário', fakeAsync(() => { //colocar o fakeAsync toda vez que rolar coisa assíncrona
    spyOn(component, 'submit'); 
    component.submit();
    expect(component.submit).toHaveBeenCalled();
  }));

  it('deve chamar o método findIngredientes ao iniciar', fakeAsync(() => { //colocar o fakeAsync toda vez que rolar coisa assíncrona
    spyOn(component, 'findIngredientes'); 
    component.findIngredientes();
    expect(component.findIngredientes).toHaveBeenCalled();
  }));

  it('deve chamar o método getSaborById ao iniciar', fakeAsync(() => { //colocar o fakeAsync toda vez que rolar coisa assíncrona
    spyOn(component, 'getSaborById'); 
    component.getSaborById('1');
    expect(component.getSaborById).toHaveBeenCalled();
  }));
    
    
  afterEach(() => {
    fixture.destroy();
  });
});
