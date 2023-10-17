import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioNewRegisterComponent } from './cardapio-new-register.component';

describe('CardapioNewRegisterComponent', () => {
  let component: CardapioNewRegisterComponent;
  let fixture: ComponentFixture<CardapioNewRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardapioNewRegisterComponent]
    });
    fixture = TestBed.createComponent(CardapioNewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
