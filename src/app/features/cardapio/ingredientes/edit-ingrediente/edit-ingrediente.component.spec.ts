import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIngredienteComponent } from './edit-ingrediente.component';

describe('EditIngredienteComponent', () => {
  let component: EditIngredienteComponent;
  let fixture: ComponentFixture<EditIngredienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIngredienteComponent]
    });
    fixture = TestBed.createComponent(EditIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
