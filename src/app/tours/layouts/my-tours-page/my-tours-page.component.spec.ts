import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToursPageComponent } from './my-tours-page.component';

describe('MyToursPageComponent', () => {
  let component: MyToursPageComponent;
  let fixture: ComponentFixture<MyToursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyToursPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
