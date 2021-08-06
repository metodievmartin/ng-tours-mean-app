import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsMapComponent } from './tour-details-map.component';

describe('TourDetailsMapComponent', () => {
  let component: TourDetailsMapComponent;
  let fixture: ComponentFixture<TourDetailsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
