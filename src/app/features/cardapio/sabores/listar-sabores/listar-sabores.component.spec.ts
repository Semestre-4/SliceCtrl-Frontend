import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSaboresComponent } from './listar-sabores.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarSaboresComponent', () => {
  let component: ListarSaboresComponent;
  let fixture: ComponentFixture<ListarSaboresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSaboresComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListarSaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
