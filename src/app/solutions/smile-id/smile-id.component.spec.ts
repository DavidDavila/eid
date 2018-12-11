import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileIdComponent } from './smile-id.component';

describe('SmileIdComponent', () => {
  let component: SmileIdComponent;
  let fixture: ComponentFixture<SmileIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
