import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleImgComponent } from './circle-img.component';

describe('CircleImgComponent', () => {
  let component: CircleImgComponent;
  let fixture: ComponentFixture<CircleImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
