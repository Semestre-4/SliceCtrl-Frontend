import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarClientesComponent } from './registar-clientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('RegistarClientesComponent', () => {
  let component: RegistarClientesComponent;
  let fixture: ComponentFixture<RegistarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarClientesComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(RegistarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
