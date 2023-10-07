import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSaboresComponent } from './listar-sabores.component';

describe('ListarSaboresComponent', () => {
  let component: ListarSaboresComponent;
  let fixture: ComponentFixture<ListarSaboresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSaboresComponent]
    });
    fixture = TestBed.createComponent(ListarSaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
