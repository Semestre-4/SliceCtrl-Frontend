import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUsuarioComponent } from './register-usuario.component';

describe('RegisterUsuarioComponent', () => {
  let component: RegisterUsuarioComponent;
  let fixture: ComponentFixture<RegisterUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUsuarioComponent]
    });
    fixture = TestBed.createComponent(RegisterUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
