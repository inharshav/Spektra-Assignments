import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralpracComponent } from './structuralprac.component';

describe('StructuralpracComponent', () => {
  let component: StructuralpracComponent;
  let fixture: ComponentFixture<StructuralpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralpracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
