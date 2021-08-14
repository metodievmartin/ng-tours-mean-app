import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewsPageComponent } from './user-reviews-page.component';

describe('UserReviewsPageComponent', () => {
  let component: UserReviewsPageComponent;
  let fixture: ComponentFixture<UserReviewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReviewsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
