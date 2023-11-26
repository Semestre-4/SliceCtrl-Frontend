import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioNavbarComponent } from './cardapio-navbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardapioNavbarComponent', () => {
  let component: CardapioNavbarComponent;
  let fixture: ComponentFixture<CardapioNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardapioNavbarComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardapioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
