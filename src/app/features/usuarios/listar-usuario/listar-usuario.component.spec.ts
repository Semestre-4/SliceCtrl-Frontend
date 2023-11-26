import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuarioComponent } from './listar-usuario.component';

describe('ListarUsuarioComponent', () => {
  let component: ListarUsuarioComponent;
  let fixture: ComponentFixture<ListarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuarioComponent]
    });
    fixture = TestBed.createComponent(ListarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
