import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaborComponent } from './edit-sabor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditSaborComponent', () => {
  let component: EditSaborComponent;
  let fixture: ComponentFixture<EditSaborComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSaborComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditSaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
