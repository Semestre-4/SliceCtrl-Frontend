import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenPizzaComponent } from './chosen-pizza.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChosenPizzaComponent', () => {
  let component: ChosenPizzaComponent;
  let fixture: ComponentFixture<ChosenPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChosenPizzaComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ChosenPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
