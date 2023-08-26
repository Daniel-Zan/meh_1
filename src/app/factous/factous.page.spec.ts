import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactousPage } from './factous.page';

describe('FactousPage', () => {
  let component: FactousPage;
  let fixture: ComponentFixture<FactousPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FactousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
