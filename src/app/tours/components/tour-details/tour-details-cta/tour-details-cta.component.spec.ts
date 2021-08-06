import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsCtaComponent } from './tour-details-cta.component';

describe('TourDetailsCtaComponent', () => {
  let component: TourDetailsCtaComponent;
  let fixture: ComponentFixture<TourDetailsCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
