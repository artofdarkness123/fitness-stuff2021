import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMRNotesComponent } from './bmr-notes.component';

describe('BMRNotesComponent', () => {
  let component: BMRNotesComponent;
  let fixture: ComponentFixture<BMRNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMRNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMRNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
