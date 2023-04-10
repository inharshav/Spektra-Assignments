import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsofTechComponent } from './detailsoftech.component';

describe('DetailsoftechComponent', () => {
  let component: DetailsofTechComponent;
  let fixture: ComponentFixture<DetailsofTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsofTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsofTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
