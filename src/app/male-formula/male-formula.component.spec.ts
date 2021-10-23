import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleFormulaComponent } from './male-formula.component';

describe('MaleFormulaComponent', () => {
  let component: MaleFormulaComponent;
  let fixture: ComponentFixture<MaleFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaleFormulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
