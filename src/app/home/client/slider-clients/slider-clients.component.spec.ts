import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderClientsComponent } from './slider-clients.component';

describe('SliderClientsComponent', () => {
  let component: SliderClientsComponent;
  let fixture: ComponentFixture<SliderClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
