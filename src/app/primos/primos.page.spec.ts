import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimosPage } from './primos.page';

describe('PrimosPage', () => {
  let component: PrimosPage;
  let fixture: ComponentFixture<PrimosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
