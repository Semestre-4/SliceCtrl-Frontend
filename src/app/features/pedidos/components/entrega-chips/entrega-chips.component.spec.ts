import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaChipsComponent } from './entrega-chips.component';

describe('EntregaChipsComponent', () => {
  let component: EntregaChipsComponent;
  let fixture: ComponentFixture<EntregaChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntregaChipsComponent]
    });
    fixture = TestBed.createComponent(EntregaChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
