import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborDisplayComponent } from './sabor-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SaborDisplayComponent', () => {
  let component: SaborDisplayComponent;
  let fixture: ComponentFixture<SaborDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborDisplayComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SaborDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
