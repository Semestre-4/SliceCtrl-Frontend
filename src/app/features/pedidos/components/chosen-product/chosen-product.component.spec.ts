import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenProductComponent } from './chosen-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChosenProductComponent', () => {
  let component: ChosenProductComponent;
  let fixture: ComponentFixture<ChosenProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChosenProductComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ChosenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
