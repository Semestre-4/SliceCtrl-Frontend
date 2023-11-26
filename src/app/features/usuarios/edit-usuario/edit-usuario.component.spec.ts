import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsuarioComponent } from './edit-usuario.component';

describe('EditUsuarioComponent', () => {
  let component: EditUsuarioComponent;
  let fixture: ComponentFixture<EditUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUsuarioComponent]
    });
    fixture = TestBed.createComponent(EditUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
