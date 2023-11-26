import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenSaboresComponent } from './chosen-sabores.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChosenSaboresComponent', () => {
  let component: ChosenSaboresComponent;
  let fixture: ComponentFixture<ChosenSaboresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChosenSaboresComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ChosenSaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
