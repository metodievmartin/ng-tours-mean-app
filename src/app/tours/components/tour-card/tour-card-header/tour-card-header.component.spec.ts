import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCardHeaderComponent } from './tour-card-header.component';

describe('TourCardHeaderComponent', () => {
  let component: TourCardHeaderComponent;
  let fixture: ComponentFixture<TourCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
