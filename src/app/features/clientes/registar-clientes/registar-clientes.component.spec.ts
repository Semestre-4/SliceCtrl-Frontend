import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarClientesComponent } from './registar-clientes.component';

describe('RegistarClientesComponent', () => {
  let component: RegistarClientesComponent;
  let fixture: ComponentFixture<RegistarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarClientesComponent]
    });
    fixture = TestBed.createComponent(RegistarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
