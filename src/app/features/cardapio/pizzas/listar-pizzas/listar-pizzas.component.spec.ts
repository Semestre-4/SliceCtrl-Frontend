import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPizzasComponent } from './listar-pizzas.component';

describe('ListarPizzasComponent', () => {
  let component: ListarPizzasComponent;
  let fixture: ComponentFixture<ListarPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPizzasComponent]
    });
    fixture = TestBed.createComponent(ListarPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
