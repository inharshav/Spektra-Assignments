import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpplComponent } from './listofppl.component';

describe('ListofpplComponent', () => {
  let component: ListofpplComponent;
  let fixture: ComponentFixture<ListofpplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofpplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofpplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
