import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiTableComponent } from './bmi-table.component';

describe('BmiTableComponent', () => {
  let component: BmiTableComponent;
  let fixture: ComponentFixture<BmiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
