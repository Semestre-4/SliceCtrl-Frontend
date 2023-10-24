import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenProductComponent } from './chosen-product.component';

describe('ChosenProductComponent', () => {
  let component: ChosenProductComponent;
  let fixture: ComponentFixture<ChosenProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChosenProductComponent]
    });
    fixture = TestBed.createComponent(ChosenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
