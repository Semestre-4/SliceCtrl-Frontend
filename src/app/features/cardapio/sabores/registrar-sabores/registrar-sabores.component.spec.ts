import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSaboresComponent } from './registrar-sabores.component';

describe('RegistrarSaboresComponent', () => {
  let component: RegistrarSaboresComponent;
  let fixture: ComponentFixture<RegistrarSaboresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSaboresComponent]
    });
    fixture = TestBed.createComponent(RegistrarSaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
