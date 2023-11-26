import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioNewRegisterComponent } from './cardapio-new-register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardapioNewRegisterComponent', () => {
  let component: CardapioNewRegisterComponent;
  let fixture: ComponentFixture<CardapioNewRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardapioNewRegisterComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardapioNewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
