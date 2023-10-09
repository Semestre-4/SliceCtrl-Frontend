import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFuncionariosComponent } from './listar-funcionarios.component';

describe('ListarFuncionariosComponent', () => {
  let component: ListarFuncionariosComponent;
  let fixture: ComponentFixture<ListarFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarFuncionariosComponent]
    });
    fixture = TestBed.createComponent(ListarFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
