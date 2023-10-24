import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuncionarioComponent } from './edit-funcionario.component';

describe('EditFuncionarioComponent', () => {
  let component: EditFuncionarioComponent;
  let fixture: ComponentFixture<EditFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFuncionarioComponent]
    });
    fixture = TestBed.createComponent(EditFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
