import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { EditIngredienteComponent } from './edit-ingrediente.component';
import { By } from '@angular/platform-browser';
import { Ingredientes } from '../ingrediente';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditIngredienteComponent', () => {
  let component: EditIngredienteComponent;
  let fixture: ComponentFixture<EditIngredienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIngredienteComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    
  beforeEach(() => {
    let ingrediente = new Ingredientes();
    ingrediente.nomeIngrediente = 'Ingrediente';
    ingrediente.qtdeIngrediente = 5;
    
    component.ingrediente = ingrediente;
    fixture.detectChanges();
  });


  it('Teste input ingrediente nome.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomeIngrediente"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Ingrediente');
  });

  it('Teste input qtdeIngrediente.', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="qtdeIngrediente"]'));
    expect(elemento.nativeElement.ngModel).toEqual(5);
  });

  it('deve chamar o método save ao enviar o formulário', fakeAsync(() => { //colocar o fakeAsync toda vez que rolar coisa assíncrona
    spyOn(component, 'submit'); 
    component.submit();
    expect(component.submit).toHaveBeenCalled();
  }));
});
