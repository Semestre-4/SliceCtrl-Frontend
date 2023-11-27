import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsuarioComponent } from './edit-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditUsuarioComponent', () => {
  let component: EditUsuarioComponent;
  let fixture: ComponentFixture<EditUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUsuarioComponent],
      imports:[HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
