import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPicturesComponent } from './tour-details-pictures.component';

describe('TourDetailsPicturesComponent', () => {
  let component: TourDetailsPicturesComponent;
  let fixture: ComponentFixture<TourDetailsPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
