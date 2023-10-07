import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPizzasComponent } from './registrar-pizzas.component';

describe('RegistrarPizzasComponent', () => {
  let component: RegistrarPizzasComponent;
  let fixture: ComponentFixture<RegistrarPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPizzasComponent]
    });
    fixture = TestBed.createComponent(RegistrarPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
