import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleFormulaComponent } from './female-formula.component';

describe('FemaleFormulaComponent', () => {
  let component: FemaleFormulaComponent;
  let fixture: ComponentFixture<FemaleFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemaleFormulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
