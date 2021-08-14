import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsPageComponent } from './user-settings-page.component';

describe('UserSettingsComponent', () => {
  let component: UserSettingsPageComponent;
  let fixture: ComponentFixture<UserSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
