import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsDescriptionComponent } from './tour-details-description.component';

describe('TourDetailsDescriptionComponent', () => {
  let component: TourDetailsDescriptionComponent;
  let fixture: ComponentFixture<TourDetailsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
