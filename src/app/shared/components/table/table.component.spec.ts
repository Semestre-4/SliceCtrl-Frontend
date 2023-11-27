import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormatarPrecoPipe } from '../../pipes/formatar-preco/formatar-preco.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent,FormatarPrecoPipe],
      imports: [HttpClientTestingModule,RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [FormatarPrecoPipe]
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
