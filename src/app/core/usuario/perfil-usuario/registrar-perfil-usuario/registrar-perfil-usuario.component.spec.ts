import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPerfilUsuarioComponent } from './registrar-perfil-usuario.component';

describe('RegistrarPerfilUsuarioComponent', () => {
  let component: RegistrarPerfilUsuarioComponent;
  let fixture: ComponentFixture<RegistrarPerfilUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPerfilUsuarioComponent]
    });
    fixture = TestBed.createComponent(RegistrarPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
