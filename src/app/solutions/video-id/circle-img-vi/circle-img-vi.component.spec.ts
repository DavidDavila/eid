import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleImgViComponent } from './circle-img-vi.component';

describe('CircleImgViComponent', () => {
  let component: CircleImgViComponent;
  let fixture: ComponentFixture<CircleImgViComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleImgViComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleImgViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
