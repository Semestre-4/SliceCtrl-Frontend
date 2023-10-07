import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIngredientesComponent } from './registrar-ingredientes.component';

describe('RegistrarIngredientesComponent', () => {
  let component: RegistrarIngredientesComponent;
  let fixture: ComponentFixture<RegistrarIngredientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarIngredientesComponent]
    });
    fixture = TestBed.createComponent(RegistrarIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
