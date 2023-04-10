import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortableComponent } from './fortable.component';

describe('FortableComponent', () => {
  let component: FortableComponent;
  let fixture: ComponentFixture<FortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
