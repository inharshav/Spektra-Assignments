import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Det2Component } from './det2.component';

describe('Det2Component', () => {
  let component: Det2Component;
  let fixture: ComponentFixture<Det2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Det2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Det2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
