import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIngredienteComponent } from './edit-ingrediente.component';
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
});
