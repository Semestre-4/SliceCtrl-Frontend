import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayComponent } from './product-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductDisplayComponent', () => {
  let component: ProductDisplayComponent;
  let fixture: ComponentFixture<ProductDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDisplayComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProductDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
