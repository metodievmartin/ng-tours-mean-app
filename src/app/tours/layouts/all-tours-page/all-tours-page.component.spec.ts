import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllToursPageComponent } from './all-tours-page.component';

describe('TourContainerComponent', () => {
  let component: AllToursPageComponent;
  let fixture: ComponentFixture<AllToursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllToursPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllToursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
