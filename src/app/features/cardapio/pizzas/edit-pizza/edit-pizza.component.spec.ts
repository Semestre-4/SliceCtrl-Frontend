import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPizzaComponent } from './edit-pizza.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditPizzaComponent', () => {
  let component: EditPizzaComponent;
  let fixture: ComponentFixture<EditPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPizzaComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
