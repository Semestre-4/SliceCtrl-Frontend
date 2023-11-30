import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPizzasComponent } from './listar-pizzas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarPizzasComponent', () => {
  let component: ListarPizzasComponent;
  let fixture: ComponentFixture<ListarPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPizzasComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListarPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
