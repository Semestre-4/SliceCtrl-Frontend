import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFuncionariosComponent } from './register-funcionarios.component';

describe('RegisterFuncionariosComponent', () => {
  let component: RegisterFuncionariosComponent;
  let fixture: ComponentFixture<RegisterFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFuncionariosComponent]
    });
    fixture = TestBed.createComponent(RegisterFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
