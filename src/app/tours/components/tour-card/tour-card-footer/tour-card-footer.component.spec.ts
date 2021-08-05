import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCardFooterComponent } from './tour-card-footer.component';

describe('TourCardFooterComponent', () => {
  let component: TourCardFooterComponent;
  let fixture: ComponentFixture<TourCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
