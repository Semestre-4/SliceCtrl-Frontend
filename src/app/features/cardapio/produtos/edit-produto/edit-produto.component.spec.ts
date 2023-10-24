import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdutoComponent } from './edit-produto.component';

describe('EditProdutoComponent', () => {
  let component: EditProdutoComponent;
  let fixture: ComponentFixture<EditProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProdutoComponent]
    });
    fixture = TestBed.createComponent(EditProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
