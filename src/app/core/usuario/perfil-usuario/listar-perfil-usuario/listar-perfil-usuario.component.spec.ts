import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPerfilUsuarioComponent } from './listar-perfil-usuario.component';

describe('ListarPerfilUsuarioComponent', () => {
  let component: ListarPerfilUsuarioComponent;
  let fixture: ComponentFixture<ListarPerfilUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPerfilUsuarioComponent]
    });
    fixture = TestBed.createComponent(ListarPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
