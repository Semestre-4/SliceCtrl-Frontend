import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuarioComponent } from './listar-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarUsuarioComponent', () => {
  let component: ListarUsuarioComponent;
  let fixture: ComponentFixture<ListarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuarioComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
