import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfiTableComponent } from './bfi-table.component';

describe('BfiTableComponent', () => {
  let component: BfiTableComponent;
  let fixture: ComponentFixture<BfiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
