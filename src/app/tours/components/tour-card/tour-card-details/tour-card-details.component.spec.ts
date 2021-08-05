import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCardDetailsComponent } from './tour-card-details.component';

describe('TourCardDetailsComponent', () => {
  let component: TourCardDetailsComponent;
  let fixture: ComponentFixture<TourCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
