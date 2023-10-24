import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioNavbarComponent } from './cardapio-navbar.component';

describe('CardapioNavbarComponent', () => {
  let component: CardapioNavbarComponent;
  let fixture: ComponentFixture<CardapioNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardapioNavbarComponent]
    });
    fixture = TestBed.createComponent(CardapioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
