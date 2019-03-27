import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsesCasesFilterComponent } from './uses-cases-filter.component';

describe('UsesCasesFilterComponent', () => {
  let component: UsesCasesFilterComponent;
  let fixture: ComponentFixture<UsesCasesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsesCasesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsesCasesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
