import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenPizzaComponent } from './chosen-pizza.component';

describe('ChosenPizzaComponent', () => {
  let component: ChosenPizzaComponent;
  let fixture: ComponentFixture<ChosenPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChosenPizzaComponent]
    });
    fixture = TestBed.createComponent(ChosenPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
