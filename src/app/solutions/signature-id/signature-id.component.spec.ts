import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureIdComponent } from './signature-id.component';

describe('SignatureIdComponent', () => {
  let component: SignatureIdComponent;
  let fixture: ComponentFixture<SignatureIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
