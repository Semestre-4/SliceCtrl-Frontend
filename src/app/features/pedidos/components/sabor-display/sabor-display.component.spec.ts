import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborDisplayComponent } from './sabor-display.component';

describe('SaborDisplayComponent', () => {
  let component: SaborDisplayComponent;
  let fixture: ComponentFixture<SaborDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborDisplayComponent]
    });
    fixture = TestBed.createComponent(SaborDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
