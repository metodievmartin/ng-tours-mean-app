import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBillingPageComponent } from './user-billing-page.component';

describe('UserBillingPageComponent', () => {
  let component: UserBillingPageComponent;
  let fixture: ComponentFixture<UserBillingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBillingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
