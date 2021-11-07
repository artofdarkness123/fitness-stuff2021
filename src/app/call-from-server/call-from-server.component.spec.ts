import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallFromServerComponent } from './call-from-server.component';

describe('CallFromServerComponent', () => {
  let component: CallFromServerComponent;
  let fixture: ComponentFixture<CallFromServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallFromServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
