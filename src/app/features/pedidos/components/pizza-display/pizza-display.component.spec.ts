import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDisplayComponent } from './pizza-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PizzaDisplayComponent', () => {
  let component: PizzaDisplayComponent;
  let fixture: ComponentFixture<PizzaDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaDisplayComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PizzaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
