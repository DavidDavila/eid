import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniesSliderComponent } from './testimonies-slider.component';

describe('TestimoniesSliderComponent', () => {
  let component: TestimoniesSliderComponent;
  let fixture: ComponentFixture<TestimoniesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoniesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
