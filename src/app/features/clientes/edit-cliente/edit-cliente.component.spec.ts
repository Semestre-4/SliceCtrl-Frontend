import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClienteComponent } from './edit-cliente.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditClienteComponent', () => {
  let component: EditClienteComponent;
  let fixture: ComponentFixture<EditClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClienteComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
