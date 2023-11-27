import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPizzasComponent } from './registrar-pizzas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

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
});
