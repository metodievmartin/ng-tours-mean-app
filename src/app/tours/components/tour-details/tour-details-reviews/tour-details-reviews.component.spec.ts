import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsReviewsComponent } from './tour-details-reviews.component';

describe('TourDetailsReviewsComponent', () => {
  let component: TourDetailsReviewsComponent;
  let fixture: ComponentFixture<TourDetailsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
