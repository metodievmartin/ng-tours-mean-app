import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingsPageComponent } from './user-bookings-page.component';

describe('UserBookingsComponent', () => {
  let component: UserBookingsPageComponent;
  let fixture: ComponentFixture<UserBookingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
