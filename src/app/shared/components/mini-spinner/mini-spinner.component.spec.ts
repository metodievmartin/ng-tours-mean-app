import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSpinnerComponent } from './mini-spinner.component';

describe('MiniSpinnerComponent', () => {
  let component: MiniSpinnerComponent;
  let fixture: ComponentFixture<MiniSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
