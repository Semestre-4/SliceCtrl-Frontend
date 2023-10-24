import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDisplayComponent } from './pizza-display.component';

describe('PizzaDisplayComponent', () => {
  let component: PizzaDisplayComponent;
  let fixture: ComponentFixture<PizzaDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaDisplayComponent]
    });
    fixture = TestBed.createComponent(PizzaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
