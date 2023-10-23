import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenSaboresComponent } from './chosen-sabores.component';

describe('ChosenSaboresComponent', () => {
  let component: ChosenSaboresComponent;
  let fixture: ComponentFixture<ChosenSaboresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChosenSaboresComponent]
    });
    fixture = TestBed.createComponent(ChosenSaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
