import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStatsComponent } from './general-stats.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('GeneralStatsComponent', () => {
  let component: GeneralStatsComponent;
  let fixture: ComponentFixture<GeneralStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralStatsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GeneralStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
