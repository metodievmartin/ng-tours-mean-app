import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourContainerComponent } from './tour-container.component';

describe('TourContainerComponent', () => {
  let component: TourContainerComponent;
  let fixture: ComponentFixture<TourContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
