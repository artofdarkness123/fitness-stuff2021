import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRateGridComponent } from './heart-rate-grid.component';

describe('HeartRateGridComponent', () => {
  let component: HeartRateGridComponent;
  let fixture: ComponentFixture<HeartRateGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartRateGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartRateGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
