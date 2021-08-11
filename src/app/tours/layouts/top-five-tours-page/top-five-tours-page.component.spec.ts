import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveToursPageComponent } from './top-five-tours-page.component';

describe('TopFiveToursPageComponent', () => {
  let component: TopFiveToursPageComponent;
  let fixture: ComponentFixture<TopFiveToursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFiveToursPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveToursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
