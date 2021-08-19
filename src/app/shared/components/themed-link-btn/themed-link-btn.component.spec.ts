import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedLinkBtnComponent } from './themed-link-btn.component';

describe('ThemedLinkBtnComponent', () => {
  let component: ThemedLinkBtnComponent;
  let fixture: ComponentFixture<ThemedLinkBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemedLinkBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemedLinkBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
