import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConjuntosPage } from './conjuntos.page';

describe('ConjuntosPage', () => {
  let component: ConjuntosPage;
  let fixture: ComponentFixture<ConjuntosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConjuntosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
